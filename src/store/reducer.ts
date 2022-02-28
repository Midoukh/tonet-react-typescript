import * as actionTypes from "./actionTypes";

const isFetched: boolean = false;
const SingleImageCategoriesListOfImages: object[] = [];

const initialState: StoreState = {
  isFetched,
  SingleImageCategoriesListOfImages,
};

const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.IS_FETCHD_IMAGE_CATEGORY:
      console.log("the state", state);
      return {
        isFetched: !state.isFetched,
      };
    case actionTypes.GET_SINGLE_IMAGE_CONTENT:
      return {
        SingleImageCategoriesListOfImages: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
