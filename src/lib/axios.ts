import {
  PIXELS_BASE_URL,
  PIXELS_API_KEY,
  EXPRESS_BASE_URL,
  IPIFY_BASE_URL,
} from "./../utils/constants/index";
import axios from "axios";

const pixelsApi = axios.create({
  baseURL: PIXELS_BASE_URL,
});
const expressApi = axios.create({
  baseURL: EXPRESS_BASE_URL,
});
const ipifyApi = axios.create({
  baseURL: IPIFY_BASE_URL,
});

pixelsApi.defaults.headers.common["Authorization"] = PIXELS_API_KEY;

export { pixelsApi, expressApi, ipifyApi };
