export default class Calculatric {
  //user type 5 + 6 * 4 + 5
  parseOperation = (operation: string) => {
    const multiplicationPriority = 1;
    const DividingPriority = 1;
    const additionPriority = 0;
    const SubstractionPriority = 0;

    console.log(operation);
  };

  add = (values: number[]): number => {
    //like this [24, 11, 10, 12]
    return 0;
  };
}