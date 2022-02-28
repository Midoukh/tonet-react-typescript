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
export const PIXELS_BASE_URL = "https://api.pexels.com/v1/";

export const IMAGES_CATEGORIES = [
  {
    label: "Nature",
    src: naturePhoto,
    endpoint: "/collections/just-nature-zlezwqr/",
    // skeletonColor: ""
  },
  {
    label: "Soothing",
    src: soothingPhoto,
    endpoint: "/collections/soothing-colours-fpqhz1c/",
  },
  {
    label: "Coffee",
    src: coffeePhoto,
    endpoint: "/collections/coffee-culture-ffaz4w5/",
  },
  {
    label: "Beach",
    src: beachPhoto,
    endpoint: "/collections/beach-life-s8vmm32/",
  },
  {
    label: "Fashion",
    src: fashionPhoto,
    endpoint: "/collections/fashion-w6q1n7s/",
  },
  {
    label: "Space",
    src: spacePhoto,
    endpoint: "/collections/space-wallpapers-3onyhbm/",
  },
  {
    label: "Dark",
    src: darkPhoto,
    endpoint: "/collections/dark-tones-3ac0zlq/",
  },
  {
    label: "Warm",
    src: warmPhoto,
    endpoint: "/collections/warm-wonderful-gc59cgg/",
  },
  {
    label: "Purple",
    src: purplePhoto,
    endpoint: "/collections/colour-of-2022-r2hqfhc/",
  },
];
