import React, {
  ChangeEvent,
  FC,
  useState,
  FormEvent,
  DragEvent,
  MouseEventHandler,
  useRef,
} from "react";
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
  base64ToURL,
} from "../../utils/helpers/imageMan";
import { toast } from "react-toastify";
import { expressApi } from "../../lib/axios";

interface Props {
  label?: string;
}
type InputEvent = ChangeEvent<HTMLInputElement>;
type DropEvent = DragEvent<HTMLDivElement>;
type mouseEvent = MouseEventHandler<HTMLDivElement>;

const Upload: FC<Props> = ({ label }) => {
  const notify = (message: string) => toast(message);
  const notifyError = (message: string) => toast.error(message);

  const [imageName, setImageName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [validUrl, setValidUrl] = useState(true);
  const [loading, setLoading] = useState(false);
  const [styleOnDragBegin, setStyleOnDragBegin] = useState(false);
  const [dragStart, setDragStart] = useState(false);
  const dispatch = useDispatch();
  const localStrge = new LocalStrge();
  const targetImages: any = lengthLimiter(
    JSON.parse(localStrge.get("targets") || "[]") || [],
    5
  );

  const dropZoneRef = useRef<HTMLInputElement>(null);

  const handleCompressImage = async (file: FormData): Promise<any> => {
    console.log("FormData", FormData);

    return expressApi.post("/images-processing/compression", file, {
      headers: {
        "Content-Type": `multipart/form-data`,
      },
    });
  };
  const handleUploadedOrDroppedFile = async (file: File): Promise<any> => {
    try {
      const formData = new FormData();
      formData.append("file", file);

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
      const localImageUrl = window.URL.createObjectURL(file);
      setImageName(file.name);
      handleStoreImageInLocalStorage(base64, file.name);
      dispatch(uploadImageAction(localImageUrl));
    } catch (error) {
      notify("Can't Store it locally for some reason");
      console.log("This error occured in the Upload comp");
      console.log(error);
    }
  };
  const handleOnImageChange = async (e: InputEvent): Promise<void> => {
    //get the image file from the user
    const uploadedImage = e.target.files![0];
    await handleUploadedOrDroppedFile(uploadedImage);
  };
  const handleUploadImageByUrl = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (imageURL.length) {
        //check if url is an image url
        const isValid = checkIfImageUrlIsValid(imageURL);
        setValidUrl(isValid);
        if (!isValid) {
          console.log(validUrl);
          notifyError("Make sure your URL is valid!");
          return;
        }

        const response = await handleCompressingImageReactToastPromise(
          expressApi.post("/images-processing/upload-by-url", { imageURL })
        );

        console.log(response);
        const { base64, name } = response.data.compressedImage;
        const { status, message } = response.data;
        if (status === "fail") {
          notifyError(message);
          return;
        }
        setLoading(false);
        const base64ToUrl = await base64ToURL(base64);
        dispatch(uploadImageAction(base64ToUrl));
        handleStoreImageInLocalStorage(base64, name);
      }
    } catch (error: any) {
      console.log(error);
      setLoading(false);
    }
  };
  const handleCompressingImageReactToastPromise = async (
    fun: Promise<any>
  ): Promise<any> => {
    return await toast.promise(fun, {
      pending: "Compressing your image",
      success: "Image compressed 👌",
      error: "Something went wrong, please try again 🤯",
    });
  };
  const handleStoreImageInLocalStorage = (
    image: string,
    name: string
  ): void => {
    //image is base64
    //create a new Uploaded Item object
    let updatedTargetImages: UploadedItem[] = [];
    if (targetImages.length > 1) {
      //set all the old items active prop to false
      console.log("The target images lenght is", targetImages.length);
      updatedTargetImages = targetImages.map((item: UploadedItem) => {
        item.active = false;
        return item;
      });
    }

    const newUploadedItem: UploadedItem = {
      name,
      id: uuid(),
      date: new Date(),
      base64: image,
      active: true,
    };
    //add the new target image to local storage and make sure there
    //is no duplicates
    updatedTargetImages.push(newUploadedItem);
    const newTargetImages = [...new Set(updatedTargetImages)];
    localStrge.set("targets", JSON.stringify(newTargetImages));
  };

  const handleDropFile = async (ev: DropEvent): Promise<any> => {
    ev.preventDefault();
    dropZoneRef!.current!.style.borderColor = "#3498db";

    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (let i = 0; i < ev.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (ev.dataTransfer.items[i].kind === "file") {
          const file: any = ev.dataTransfer.items[i].getAsFile();
          await handleUploadedOrDroppedFile(file);
          dropZoneRef!.current!.style.borderColor = "rgba(255,255,255,.8)";
        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (let i = 0; i < ev.dataTransfer.files.length; i++) {
        const file: any = ev.dataTransfer.files[i];
        await handleUploadedOrDroppedFile(file);
        dropZoneRef!.current!.style.borderColor = "rgba(255,255,255,.8)";
      }
    }
  };
  const handleDragOver = (e: DropEvent): void => {
    setStyleOnDragBegin(true);
    e.preventDefault();
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
        <Box
          ref={dropZoneRef}
          onDrop={handleDropFile}
          onDragOver={handleDragOver}
          border="1px dashed rgba(255,255,255,.8)"
          m="1rem 0"
          p="1.8rem"
        >
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
        maxW="100%"
      />
      <form onSubmit={handleUploadImageByUrl}>
        <label>
          <Flex
            direction="column"
            justify="space-between"
            align="flex-start"
            h="20vh"
          >
            <Text>URL</Text>
            <Input
              isInvalid={!validUrl}
              errorBorderColor="red.300"
              type="url"
              value={imageURL}
              onChange={(e: InputEvent) => setImageURL(e.target.value)}
              placeholder="Type your image url here"
              pattern="[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?"
            />
            <Button
              type="submit"
              disabled={imageURL.length < 10 || loading}
              colorScheme="blue"
              variant="outline"
              w="100%"
            >
              {loading ? "Loading..." : "Upload"}
            </Button>
          </Flex>
        </label>
      </form>
      <br />
      <br />
    </Box>
  );
};

export default Upload;
