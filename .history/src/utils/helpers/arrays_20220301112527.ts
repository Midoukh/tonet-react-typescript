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
    newArray = arr.filter(
      (ele) => ele.url && ele.src && ele.height && ele.width
    );
  }
};
