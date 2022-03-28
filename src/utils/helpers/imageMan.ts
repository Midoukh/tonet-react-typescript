export const imageToBase64 = (file: File): Promise<any> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
};
export const base64ToURL = async (base64: string): Promise<string> => {
  if (!base64) return "";
  const response = await fetch(base64);
  const blob = await response.blob();
  const imageUrl = URL.createObjectURL(blob);

  console.log("Image Url", imageUrl);
  return new Promise((resolve) => resolve(imageUrl));
};
//https://images.pexels.com/photos/10194726/pexels-photo-10194726.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
export const checkIfImageUrlIsValid = (url: string): boolean => {
  return url.match(/(jpg|jpeg|gif|png)((\?.*)$|$)/gm) !== null;
};
