export const imageToBase64 = (file: File) => {
  const reader = new FileReader();
  reader.onloadend = () => {
    console.log("RESULT", reader.result);
  };
  reader.readAsDataURL(file);
};
