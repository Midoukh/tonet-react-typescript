export const sleep = async (duration: number) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};
