import { ipifyApi } from "../../lib/axios";
export const handleGetUserIPAdress = async (): Promise<any> => {
  return ipifyApi.get("?format=json");
};
