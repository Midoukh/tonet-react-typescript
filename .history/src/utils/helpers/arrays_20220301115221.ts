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
  for (let i = 0; i < props.length; i++) {
    //at each prop we need to push a filtered object
    arr.forEach((ele) => {
      const obj: IOBJ<string> = {};
      const keys = Object.keys(ele);

      keys.forEach((key) => {
        if (props[i] === key) {
          obj[props[i]] = ele[props[i]];
        }
      });
      newArray.push(obj);
    });
  }
  console.log(newArray);
  return newArray;
};
