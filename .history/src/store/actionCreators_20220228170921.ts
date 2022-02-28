import * as actionTypes from "./actionTypes";

export const fetchImageCategory = (isFetched: boolean): object => {
  return {
    type: actionTypes.IS_FETCHD_IMAGE_CATEGORY,
    payload: isFetched,
  };
};
