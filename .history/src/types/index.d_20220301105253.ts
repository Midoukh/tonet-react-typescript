declare module "*.jpg";
declare module "*.JPG";
declare module "*.png";

interface StoreState {
  isFetched: boolean;
  SingleImageCategoriesListOfImages: object[];
}

interface ActionType {
  type: string;
  payload: any;
}
