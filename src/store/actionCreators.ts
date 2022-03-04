import * as actionTypes from "./actionTypes";

export const fetchImageCategory = (isFetched: boolean): object => {
  return {
    type: actionTypes.IS_FETCHD_IMAGE_CATEGORY,
    payload: isFetched,
  };
};

export const getSingleImageContent = (arr: object[]): object => {
  return {
    type: actionTypes.GET_SINGLE_IMAGE_CONTENT,
    payload: arr,
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
