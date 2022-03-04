export const imageToBase64 = (file: File): Promise<any> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
};

export const base64ToURL = (base64: string) => {
  fetch(base64)
    .then((res) => res.blob())
    .then((blob) => console.log(blob));
};
