import naturePhoto from "../../assets/nature.jpg";
import soothingPhoto from "../../assets/soothing.jpg";

export const PIXELS_API_KEY =
  "563492ad6f91700001000001e0bde1cf4ac641329d7726a8f0035d18";
export const PIXELS_BASE_URL = "https://api.pexels.com/v1/";

export const IMAGES_CATEGORIES = [
  {
    label: "Nature",
    src: naturePhoto,
    endpoint: "/collections/just-nature-zlezwqr/",
  },
  {
    label: "Soothing",
    src: soothingPhoto,
    endpoint: "/collections/soothing-colours-fpqhz1c/",
  },
];