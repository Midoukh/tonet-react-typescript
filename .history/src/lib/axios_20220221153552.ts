import { PIXELS_BASE_URL, PIXELS_API_KEY } from "./../utils/constants/index";
import axios from "axios";

const instance = axios.create({
  // .. where we make our configurations
  baseURL: PIXELS_BASE_URL,
});

// Where you would set stuff like your 'Authorization' header, etc ...
instance.defaults.headers.common["Authorization"] = PIXELS_API_KEY;

// Also add/ configure interceptors && all the other cool stuff

export default instance;
