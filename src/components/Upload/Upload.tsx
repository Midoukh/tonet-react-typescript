import React, { ChangeEvent, FC, useState } from "react";
import { Box, Heading, Flex, Text, Input, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { BsImageAlt } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import { LocalStrge } from "../../utils/helpers/localStrge";
import { lengthLimiter } from "../../utils/helpers/arrays";
import { v4 as uuid } from "uuid";
import { uploadTargetImage as uploadImageAction } from "../../store/actionCreators";
import {
  imageToBase64,
  checkIfImageUrlIsValid,
} from "../../utils/helpers/imageMan";
import { toast } from "react-toastify";
import { expressApi } from "../../lib/axios";

interface Props {
  label?: string;
}
type InputEvent = ChangeEvent<HTMLInputElement>;

const Upload: FC<Props> = ({ label }) => {
  const notify = (message: string) => toast(message);
  const notifyError = (message: string) => toast.error(message);

  const [imageName, setImageName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const dispatch = useDispatch();
  const localStrge = new LocalStrge();
  const targetImages: any = lengthLimiter(
    JSON.parse(localStrge.get("targets") || "[]") || [],
    5
  );

  const handleCompressImage = async (file: FormData): Promise<any> => {
    console.log("FormData", FormData);

    return expressApi.post("/images-processing/compression", file, {
      headers: {
        "Content-Type": `multipart/form-data`,
      },
    });
  };

  const handleOnImageChange = async (e: InputEvent): Promise<void> => {
    try {
      //get the image file from the user
      const uploadedImage = e.target.files![0];
      const formData = new FormData();
      formData.append("file", uploadedImage);

      //compressing the uploaded image
      const response = await toast.promise(handleCompressImage(formData), {
        pending: "Compressing your image",
        success: "Image compressed 👌",
        error: "Something went wrong, please try again 🤯",
      });

      //get the base64 from the server so we can store it locally
      const { base64 } = response.data.compressedImage;
      // const base64 = (await imageToBase64(output)) || "";

      //create a URL from the image to be use as a src for <img />
      //because base64 are to fucking ugly and big
      const localImageUrl = window.URL.createObjectURL(uploadedImage);
      dispatch(uploadImageAction(localImageUrl));
      setImageName(uploadedImage.name);

      //create a new Uploaded Item object

      const newUploadedItem: UploadedItem = {
        name: uploadedImage.name,
        id: uuid(),
        date: new Date(),
        base64,
        active: true,
      };
      //add the new target image to local storage and make sure there
      //is no duplicates
      targetImages.push(newUploadedItem);
      const newTargetImages = [...new Set(targetImages)];
      localStrge.set("targets", JSON.stringify(newTargetImages));
    } catch (error) {
      notify("Can't Store it locally for some reason");
      console.log("This error occured in the Upload comp");
      console.log(error);
    }
  };
  const handleUploadImageByUrl = async () => {
    if (imageURL.length) {
      const isValid = checkIfImageUrlIsValid(imageURL);
      if (!isValid) {
        notifyError("Make sure your URL is valid!");
        return;
      }
      const response = await expressApi.post(
        "/images-processing/upload-by-url",
        { imageURL }
      );
    }
  };
  return (
    <Box m="1rem 0">
      <Heading as="h3" color="white">
        Upload
      </Heading>
      {label && (
        <Flex align="center" m="0.5rem">
          <IoIosAddCircleOutline color="white" />
          <Text color="whiteAlpha.700" ml="0.5rem">
            {label}
          </Text>
        </Flex>
      )}
      {imageName && (
        <Text mt=".5rem" maxWidth="13vw" fontSize=".57em">
          Image name: {imageName}
        </Text>
      )}
      <label htmlFor="upload-input">
        <Box border="1px dashed rgba(255,255,255,.8)" m="1rem 0" p=".8rem">
          <Flex
            direction="column"
            align="center"
            justify="center"
            textAlign="center"
            cursor="pointer"
          >
            <BsImageAlt size={20} color="white" />
            <Text>Drag and Drop or Browse</Text>
          </Flex>
        </Box>
      </label>
      <Input
        type="file"
        name="file"
        accept="image/*"
        onChange={handleOnImageChange}
        visibility="hidden"
        position="absolute"
        id="upload-input"
        width="unset"
      />
      <label>
        <Flex
          direction="column"
          justify="space-between"
          align="flex-start"
          h="20vh"
        >
          <Text>URL</Text>
          <Input
            type="url"
            value={imageURL}
            onChange={(e: InputEvent) => setImageURL(e.target.value)}
            placeholder="Type your image url here"
          />
          <Button
            colorScheme="blue"
            variant="outline"
            w="100%"
            onClick={handleUploadImageByUrl}
          >
            Upload
          </Button>
        </Flex>
      </label>
      <br />
      <br />
    </Box>
  );
};

export default Upload;
