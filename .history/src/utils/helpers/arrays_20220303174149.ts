interface IOBJ<TValue> {
  [key: string]: TValue;
}
const FilteringArrOfObjs = (arr: IOBJ<string>[], props: string[]): object[] => {
  //arr [{}, {}, {}]
  //props : ['src', 'url', 'height']
  let newArray: IOBJ<any>[] = [];

  //this line loop though the props
  for (let i = 0; i < arr.length; i++) {
    //we have access to each element in the array
    const obj: IOBJ<string> = {};
    const keys = Object.keys(arr[i]);
    keys.forEach((key) => {
      props.forEach((prop) => {
        if (prop === key) {
          obj[prop] = arr[i][prop];
        }
      });
    });
    newArray.push(obj);
  }
  return newArray.filter(
    (ele) => ele.type !== "Video" && ele.width <= 4000 && ele.width >= 3000
  );
};

const lengthLimiter = (arr: any, limit: number): any[] => {
  if (arr.length >= limit) {
    const newArray = arr;
    newArray.pop();
    return newArray;
  }
  return arr;
};
const response = lengthLimiter([0, 2, 3, 4], 3);

console.log(response);
