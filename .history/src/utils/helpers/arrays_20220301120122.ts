interface IOBJ<TValue> {
  [key: string]: TValue;
}
export const FilteringArrOfObjs = (
  arr: IOBJ<string>[],
  props: string[]
): object[] => {
  //arr [{}, {}, {}]
  //props : ['src', 'url', 'height']
  let newArray: object[] = [];

  //this line loop though the props
  for (let i = 0; i < arr.length; i++) {
    //we have access to each element in the array
    const obj: IOBJ<string> = {};
    const keys = Object.keys(arr[i]);
    keys.forEach((key) => {
      props.forEach((prop) => {
        if (prop === key) {
          obj[props[i]] = arr[i][props[i]];
        }
      });
    });
    newArray.push(obj);
  }
  return newArray;
};
