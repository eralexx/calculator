interface ICalculatorContext {
  lastResult: number;
  onOff: boolean;
  operationString: string;
  setState: (newState: ICalculatorContext) => void;
}

export default ICalculatorContext;
