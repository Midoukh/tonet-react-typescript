declare module "*.jpg";
declare module "*.JPG";
declare module "*.png";

interface Image {
  src: {
    [key: string]: string;
  };
  url: string;
  height: number;
  width: number;
  id: number;
  type: string;
}

interface StoreState {
  isFetched: boolean;
  SingleImageCategoriesListOfImages: Image[];
}

interface ActionType {
  type: string;
  payload: any;
}
