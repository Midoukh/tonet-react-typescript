import * as actionTypes from "./actionTypes";
import { base64ToURL } from "../utils/helpers/imageMan";
import { LocalStrge } from "../utils/helpers/localStrge";
import { handleGetUserIPAdress } from "../utils/helpers/ipAdress";
const localStrge = new LocalStrge();
const TargetImages = JSON.parse(localStrge.get("targets") || "[]") || [];

const {
  data: { ip },
} = await handleGetUserIPAdress();

const isFetched: boolean = false;
const SingleImageCategoriesListOfImages: Image[] = [];
const TargetImageBase64 =
  TargetImages.length > 0 ? TargetImages[TargetImages.length - 1] : {};
const TargetImageURl = await base64ToURL(
  TargetImageBase64 !== {} ? TargetImageBase64.base64 : ""
);
const reportBugVis: boolean = false;
const currentImageCategory: string = "";
const fetchCategory = {
  currentImageCategory,
  isFetched,
  SingleImageCategoriesListOfImages,
};
const reviewVis: boolean = false;
const sourceImg: SourceImage = {
  isUrl: false,
  src: "",
};
const initialState: StoreState = {
  TargetImage: TargetImageURl,
  SourceImage: sourceImg,
  reportBugVis,
  fetchCategory,
  reviewVis,
  ipAdress: ip || "",
};

const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.FETCHD_IMAGE_CATEGORY:
      return {
        ...state,
        fetchCategory: {
          isFetched: action.payload.isFetched,
          currentImageCategory: action.payload.currentImageCategory,
          SingleImageCategoriesListOfImages:
            action.payload.SingleImageCategoriesListOfImages,
        },
      };
    case actionTypes.UPLOAD_TARGET_IMAGE:
      return {
        ...state,
        TargetImage: action.payload,
      };
    case actionTypes.SET_SOURCE_IMAGE:
      console.log(action.payload);
      return {
        ...state,
        SourceImage: action.payload,
      };
    case actionTypes.TOGGLE_REPORTBUG_VISIBILITY:
      return {
        ...state,
        reportBugVis: action.payload,
      };
    case actionTypes.TOGGLE_REVIEW_VISIBILITY:
      return {
        ...state,
        reviewVis: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
