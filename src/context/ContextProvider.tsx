import React, { Component, useState } from "react";
import Context from "./Context";
import ICalculatorContext from "./ICalculatorContext";

const ContextProvider = (props: { children: JSX.Element[] | JSX.Element }) => {
  const setNewState = (newState: ICalculatorContext) => {
    setState(newState);
  };

  const initialState: ICalculatorContext = {
    onOff: false,
    lastResult: 0,
    operationString: "0000000000",
    setState: setNewState
  };

  const [state, setState] = useState(initialState);

  return (
    <Context.Provider value={state as ICalculatorContext}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
