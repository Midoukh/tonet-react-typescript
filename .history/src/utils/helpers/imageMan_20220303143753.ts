export const imageToBase64 = (file: File): Promise<any> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
};

export const base64ToURL = async (base64: string): Promise<string> => {
  if (!base64.length) return "";
  const response = await fetch(base64);
  const blob = await response.blob();
  const imageUrl = URL.createObjectURL(blob);

  console.log("Image Url", imageUrl);
  return new Promise((resolve) => resolve(imageUrl));
};
