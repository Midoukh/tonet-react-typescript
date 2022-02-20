export default class Calculatric {
  constructor() {}
  //user type 5 + 6 * 4 + 5
  
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
    }
    return updatedStr;
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

  calculateResult = (
    expression: string
  ): number => {
    let result = 0;
    
}
