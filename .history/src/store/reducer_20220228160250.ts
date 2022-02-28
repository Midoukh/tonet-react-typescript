import * as actionTypes from "./actionTypes";

const isFetched: boolean = false;

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case actionTypes.IS_FETCHD_IMAGE_CATEGORY:
      return !isFetched;
    default:
      return state;
  }
};

export default reducer;
