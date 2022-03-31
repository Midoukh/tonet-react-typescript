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
  avg_color: string;
}
interface FetchCategory {
  isFetched: boolean;
  currentImageCategory: string;
  SingleImageCategoriesListOfImages: Image[];
}

interface StoreState {
  TargetImage: string;
  SourceImage: SourceImage;
  reportBugVis: boolean;
  reviewVis: boolean;
  shareVis: boolean;
  fetchCategory: FetchCategory;
  ipAdress: string;
}
interface SourceImage {
  src: string;
  isUrl: boolean;
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
  active?: boolean;
}

interface Favorite {
  label: string;
  id: string;
  src: string;
  endpoint: string;
  skeletonColor: string;
}

interface Payload {
  type: string;
  payload: any;
}
