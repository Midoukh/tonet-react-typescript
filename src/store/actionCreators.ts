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

export const uploadTargetImage = (Image: string): Payload => {
  return {
    type: actionTypes.UPLOAD_TARGET_IMAGE,
    payload: Image,
  };
};
export const setSourceImage = (source: SourceImage): Payload => {
  console.log(source);
  return {
    type: actionTypes.SET_SOURCE_IMAGE,
    payload: source,
  };
};

export const toggleReportBugVis = (show: boolean): Payload => {
  return {
    type: actionTypes.TOGGLE_REPORTBUG_VISIBILITY,
    payload: show,
  };
};
export const toggleReviewVis = (show: boolean): Payload => {
  return {
    type: actionTypes.TOGGLE_REVIEW_VISIBILITY,
    payload: show,
  };
};
