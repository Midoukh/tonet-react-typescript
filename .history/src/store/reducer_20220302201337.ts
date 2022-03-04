import * as actionTypes from "./actionTypes";

const isFetched: boolean = false;
const SingleImageCategoriesListOfImages: Image[] = [];

const initialState: StoreState = {
  isFetched,
  SingleImageCategoriesListOfImages,
};

const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.IS_FETCHD_IMAGE_CATEGORY:
      console.log("[reducer]", action);
      return {
        ...state,
        isFetched: action.payload,
      };
    case actionTypes.GET_SINGLE_IMAGE_CONTENT:
      return {
        isFetched: true,
        SingleImageCategoriesListOfImages: action.payload,
      };
    case actionTypes.UPLOAD_TARGET_IMAGE:
      return {
        ...state,
        TargetImage: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
