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
  removeOneChar = (input: string): string => {
    let updatedStr = input;
    if (input.length > 0) {
      if (input[input.length - 1] === " ") updatedStr = updatedStr.slice(0, -3);
      else updatedStr = updatedStr.slice(0, -1);
      console.log(updatedStr);
    } else {
      updatedStr = "0";
    }
    return updatedStr;
  };
  add = (values: number[]): number => {
    //like this [24, 11, 10, 12]
    return 0;
  };

  checkAdjacentOperators = (input: string, key: string): boolean => {
    let adjacentOps = false;
    let lastCharacter = "";

    if (input[input.length - 1] === " ") {
      lastCharacter = input[input.length - 2];
    } else {
      lastCharacter = input[input.length - 1];
    }

    const isLastChOp =
      this.checkIfKeyIsOperator(lastCharacter) &&
      this.checkIfKeyIsOperator(key);
    console.log(isLastChOp);

    if (isLastChOp) adjacentOps = true;

    return adjacentOps;
  };
}
