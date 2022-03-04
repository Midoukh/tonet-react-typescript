export const imageToBase64 = (file: File): Promise<any> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
};

export const base64ToURL = async (base64: string) => {
  const response = await fetch(base64);
  const blob = response.blob();
  console.log(blob);
};
