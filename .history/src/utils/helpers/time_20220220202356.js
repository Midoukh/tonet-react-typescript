export const sleep = async (duration) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};
