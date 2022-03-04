export const imageToBase64 = (file: File) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
};

export const base64ToURL = (base64: string) => {
  fetch(base64)
    .then((res) => console.log(res.blob()))
    .catch((err) => console.log(err));
};
