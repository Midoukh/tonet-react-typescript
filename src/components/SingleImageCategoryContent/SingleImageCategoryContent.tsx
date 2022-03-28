import React, { FC, useEffect, useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import SourceImage from "./SourceImage/SourceImage";
import { setSourceImage } from "../../store/actionCreators";
import { expressApi } from "../../lib/axios";

import "./style.css";
import { LocalStrge } from "../../utils/helpers/localStrge";

const Content: FC = ({}) => {
  const dispatch = useDispatch();
  const [selectedSourceImageId, setSelectedSourceImageId] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const gState = useSelector((state: StoreState) => state);
  const [Images] = useState(
    gState.fetchCategory.SingleImageCategoriesListOfImages || []
  );
  const handleSelectSourceImage = async (srcImg: string, id: number) => {
    setSelectedSourceImageId(id);
    const sourceImg: SourceImage = {
      isUrl: true,
      src: srcImg,
    };
    dispatch(setSourceImage(sourceImg));
    setLoading(true);
    const response = await handleSendSourceAndTargetImage();
    setLoading(false);
    console.log(response);
  };
  const handleSendSourceAndTargetImage = async (): Promise<unknown> => {
    const { SourceImage } = gState;
    const TargetImage = getTheTargetImage().base64;
    if (!SourceImage || !TargetImage) {
      throw Error("You didn' provided a source or a target image");
    }
    try {
      const data = {
        SourceImage,
        TargetImage,
      };
      return await expressApi.post("/images-processing/matching", data);
    } catch (error) {
      console.log(error);
    }
  };
  const getTheTargetImage = (): UploadedItem => {
    const localStrge = new LocalStrge();
    const targets = JSON.parse(localStrge.get("targets") || "") || [];
    if (!targets.length) {
      throw Error("no target image available");
    }
    return targets.filter((upImg: UploadedItem) => upImg.active)[0];
    
  };
  useEffect(() => {}, []);
  return (
    <Grid
      templateColumns="repeat(3, auto)"
      gap={1}
      maxH="75vh"
      overflowY="scroll"
    >
      {Images.length === 0 ? (
        <h1>Empty List</h1>
      ) : (
        Images.map((image) => (
          <GridItem key={uuid()} cursor="pointer">
            <SourceImage
              srcImg={image.src ? image.src.medium : image.url}
              width="auto"
              show="visible"
              placeholderColor={image.avg_color}
              id={image.id}
              handleSelectSourceImage={() =>
                handleSelectSourceImage(
                  image.src ? image.src.medium : image.url,
                  image.id
                )
              }
              selectedSourceImageId={selectedSourceImageId}
              loading={loading}
            />
          </GridItem>
        ))
      )}
    </Grid>
  );
};

export default Content;
