import naturePhoto from "../../assets/nature.jpg";
import soothingPhoto from "../../assets/soothing.jpg";
import coffeePhoto from "../../assets/coffee.jpg";
import beachPhoto from "../../assets/beach.jpg";
import fashionPhoto from "../../assets/fashion.jpg";
import spacePhoto from "../../assets/space.jpg";
import darkPhoto from "../../assets/dark.jpg";
import warmPhoto from "../../assets/warm.jpg";
import purplePhoto from "../../assets/purple.jpg";

export const PIXELS_API_KEY =
  "563492ad6f91700001000001e0bde1cf4ac641329d7726a8f0035d18";
export const PIXELS_BASE_URL = "https://api.pexels.com/v1";
export const EXPRESS_BASE_URL = "http://localhost:5000/api/v1";
export const IPIFY_BASE_URL = "https://api.ipify.org";
export const REACTIONS = ["Aweful", "Bad", "Ok Ok", "Good", "Amazing"];
export const IMAGES_CATEGORIES = [
  {
    label: "Nature",
    src: naturePhoto,
    endpoint: "/collections/zlezwqr/",
    skeletonColor: "#5D8142",
  },
  {
    label: "Soothing",
    src: soothingPhoto,
    endpoint: "/collections/fpqhz1c/",
    skeletonColor: "#B5A5C0",
  },
  {
    label: "Coffee",
    src: coffeePhoto,
    endpoint: "/collections/ffaz4w5/",
    skeletonColor: "#3A1D10",
  },
  {
    label: "Beach",
    src: beachPhoto,
    endpoint: "/collections/s8vmm32/",
    skeletonColor: "#7CB5C4",
  },
  {
    label: "Fashion",
    src: fashionPhoto,
    endpoint: "/collections/w6q1n7s/",
    skeletonColor: "#0F1527",
  },
  {
    label: "Space",
    src: spacePhoto,
    endpoint: "/collections/3onyhbm/",
    skeletonColor: "#617C8A",
  },
  {
    label: "Dark",
    src: darkPhoto,
    endpoint: "/collections/3ac0zlq/",
    skeletonColor: "#293436",
  },
  {
    label: "Warm",
    src: warmPhoto,
    endpoint: "/collections/gc59cgg/",
    skeletonColor: "#E6AC78",
  },
  {
    label: "Purple",
    src: purplePhoto,
    endpoint: "/collections/r2hqfhc/",
    skeletonColor: "#693365",
  },
];
