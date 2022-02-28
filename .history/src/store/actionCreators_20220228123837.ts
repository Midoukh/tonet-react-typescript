import * as actionTypes from "./actionTypes";

export const fetchCategory = (isFetched: boolean): object => {
  return {
    type: actionTypes.FETCH_IMAGE_CATEGORY,
    payload: isFetched,
  };
};
