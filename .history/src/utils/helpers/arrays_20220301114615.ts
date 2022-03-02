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
  for (let i = 0; i < props.length; i++) {
    newArray = arr.map((ele) => {
      const obj: IOBJ<string> = {};
      const keys = Object.keys(ele);

      keys.forEach((key) => {
        if (props[i] === key) {
          obj[props[i]] = ele[props[i]];
        }
      });
      return obj;
    });
  }
  console.log(newArray);
  return newArray;
};