// path: src/lotties/index.ts

import { REACTIONS } from "./../../../utils/constants/index";
// Lottie animations data
import awefulAnimationData from "./aweful.json";
import badAnimationData from "./bad.json";
import okOkAnimationData from "./ok-ok.json";
import goodAnimationData from "./good.json";
import amazingAnimationData from "./amazing.json";

export const selectAnimationData = (reaction: string) => {
  switch (reaction) {
    case REACTIONS[0]:
      return awefulAnimationData;
    case REACTIONS[1]:
      return badAnimationData;
    case REACTIONS[2]:
      return okOkAnimationData;
    case REACTIONS[3]:
      return goodAnimationData;
    case REACTIONS[4]:
      return amazingAnimationData;
    default:
      return null;
  }
};
