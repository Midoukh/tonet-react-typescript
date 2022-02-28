import { PIXELS_BASE_URL, PIXELS_API_KEY } from "./../utils/constants/index";
import axios from "axios";

const instance = axios.create({
  baseURL: PIXELS_BASE_URL,
});

instance.defaults.headers.common["Authorization"] = PIXELS_API_KEY;

export default instance;
