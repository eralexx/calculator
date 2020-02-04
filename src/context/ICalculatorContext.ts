interface ICalculatorContext {
  lastResult: number;
  onOff: boolean;
  operationString: string;
  screenString: string;
  calculate: () => void;
  setState: (newState: ICalculatorContext) => void;
}

export default ICalculatorContext;
