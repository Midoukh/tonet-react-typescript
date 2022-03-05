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
interface FetchCategory {
  isFetched: boolean;
  currentImageCategory: string;
  SingleImageCategoriesListOfImages: Image[];
}

interface StoreState {
  TargetImage: string;
  reportBugVis: boolean;
  fetchCategory: FetchCategory;
}

interface ActionType {
  type: string;
  payload: any;
}

interface UploadedItem {
  base64: string;
  date: Date;
  id: string;
  name: string;
}

interface Favorite {
  label: string;
  id: string;
  src: string;
  endpoint: string;
  skeletonColor: string;
}
