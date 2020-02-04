import React, { Component } from "react";
import Context from "./Context";
import ICalculatorContext from "./ICalculatorContext";
import { evaluate } from "mathjs";
import { Operations } from "../enums/Operations";

class ContextProvider extends Component<any, ICalculatorContext> {
  constructor(props: any) {
    super(props);

    this.state = {
      onOff: false,
      lastResult: 0,
      displayString: "",
      setState: this.setNewState,
      calculate: this.calculateExpression
    };
  }

  private setNewState = (newState: ICalculatorContext): void => {
    this.setState(newState);
  };

  private calculateExpression = (operation: Operations): void => {};

  render() {
    return (
      <Context.Provider value={this.state as ICalculatorContext}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default ContextProvider;
