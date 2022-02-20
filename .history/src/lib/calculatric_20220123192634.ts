export default class Calculatric {
  //user type 5 + 6 * 4 + 5
  parseOperation = (operation: string): string => {
    const multiplicationPriority = 1;
    const DividingPriority = 1;
    const additionPriority = 0;
    const SubstractionPriority = 0;

    return operation;
  };
  checkIfKeyIsOperator = (input: string): boolean => {
    let isOperator: boolean = false;
    switch (input) {
      case "/":
      case "*":
      case "+":
      case "-":
      case "=":
        isOperator = true;
    }
    return isOperator;
  };

  add = (values: number[]): number => {
    //like this [24, 11, 10, 12]
    return 0;
  };
}
