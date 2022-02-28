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
