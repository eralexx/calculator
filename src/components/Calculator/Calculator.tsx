import * as React from "react";
import "./Calculator.css";

const Calculator = (props: { children: JSX.Element[] | JSX.Element }) => {
  return <div className="calculator">{props.children}</div>;
};

export default Calculator;
