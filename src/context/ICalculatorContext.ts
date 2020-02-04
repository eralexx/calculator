import { Operations } from "../enums/Operations";

interface ICalculatorContext {
  lastoperation?: Operations;
  lastResult: number;
  onOff: boolean;
  displayString: string;
  calculate: (expression: Operations) => void;
  setState: (newState: ICalculatorContext) => void;
}

export default ICalculatorContext;
