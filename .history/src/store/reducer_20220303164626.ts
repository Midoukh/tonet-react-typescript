import * as actionTypes from "./actionTypes";
import { base64ToURL } from "../utils/helpers/imageMan";
import { LocalStrge } from "../utils/helpers/localStrge";

const localStrge = new LocalStrge();
const TargetImages = JSON.parse(localStrge.get("targets") || "[]") || [];

const isFetched: boolean = false;
const SingleImageCategoriesListOfImages: Image[] = [];
const TargetImageBase64 =
  TargetImages.length > 0 ? TargetImages[TargetImages.length - 1] : "";
const TargetImageURl = await base64ToURL(TargetImageBase64);

const initialState: StoreState = {
  isFetched,
  SingleImageCategoriesListOfImages,
  TargetImage: TargetImageURl,
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
