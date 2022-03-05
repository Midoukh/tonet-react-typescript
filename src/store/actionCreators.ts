import * as actionTypes from "./actionTypes";

export const fetchImageCategory = (fetchCategory: FetchCategory): object => {
  return {
    type: actionTypes.FETCHD_IMAGE_CATEGORY,
    payload: {
      isFetched: fetchCategory.isFetched,
      currentImageCategory: fetchCategory.currentImageCategory,
      SingleImageCategoriesListOfImages:
        fetchCategory.SingleImageCategoriesListOfImages,
    },
  };
};

export const uploadTargetImage = (Image: string): object => {
  return {
    type: actionTypes.UPLOAD_TARGET_IMAGE,
    payload: Image,
  };
};

export const toggleReportBugVis = (show: boolean): object => {
  return {
    type: actionTypes.TOGGLE_REPORTBUG_VISIBILITY,
    payload: show,
  };
};
