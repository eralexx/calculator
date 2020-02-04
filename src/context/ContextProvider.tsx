import React, { Component, useState } from "react";
import Context from "./Context";
import ICalculatorContext from "./ICalculatorContext";
import { sqrt, evaluate } from "mathjs";

class ContextProvider extends Component<any, ICalculatorContext> {
  constructor(props: any) {
    super(props);

    this.state = {
      onOff: false,
      lastResult: 0,
      operationString: "",
      screenString: "",
      setState: this.setNewState,
      calculate: this.calculateExpression
    } as ICalculatorContext;
  }

  private setNewState = (newState: ICalculatorContext) => {
    this.setState(newState);
  };

  private calculateExpression = () => {
    const res = evaluate(this.state.operationString);
    this.setState({
      operationString: res,
      lastResult: res
    });
  };

  render() {
    return (
      <Context.Provider value={this.state as ICalculatorContext}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default ContextProvider;
