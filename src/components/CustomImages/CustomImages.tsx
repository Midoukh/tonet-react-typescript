import React, { FC, useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { setSourceImage } from "../../store/actionCreators";
import SourceImage from "../SingleImageCategoryContent/SourceImage/SourceImage";
import { LocalStrge } from "../../utils/helpers/localStrge";

const CustomImages: FC = ({}) => {
  const { uploadInputsVis } = useSelector((state: StoreState) => state);
  const dispatch = useDispatch();
  const localStrge = new LocalStrge();
  const [selectedSourceImageId, setSelectedSourceImageId] =
    useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [customSourceImages, setCustomSourceImages] = useState(
    JSON.parse(localStrge.get("custom-source-images") || "[]") || []
  );
  const handleSelectSourceImage = async (srcImg: string, id: string) => {
    setSelectedSourceImageId(id);
    const sourceImg: SourceImage = {
      isUrl: true,
      src: srcImg,
    };
    dispatch(setSourceImage(sourceImg));
    setLoading(true);
    // const response = await handleSendSourceAndTargetImage();
    setLoading(false);
    // console.log(response);
  };

  return (
    <Grid
      templateColumns="repeat(3, auto)"
      gap={1}
      maxH={uploadInputsVis ? "15vh" : "75vh"}
      overflowY="scroll"
    >
      {customSourceImages.length ? (
        customSourceImages.map((srcImg: UploadedItem) => (
          <SourceImage
            key={uuid()}
            handleSelectSourceImage={() =>
              handleSelectSourceImage(srcImg.base64, srcImg.id)
            }
            selectedSourceImageId={selectedSourceImageId}
            srcImg={srcImg.base64}
            promise
            width="auto"
            show="visible"
            placeholderColor={srcImg.avg_color || "#ccc"}
            id={srcImg.id}
            loading={loading}
          />
        ))
      ) : (
        <Text>No custom Image was uploaded</Text>
      )}
    </Grid>
  );
};

export default CustomImages;
