import * as React from "react";
import "./ResultsBar.css";
import ICalculatorContext from "../../context/ICalculatorContext";
import { useContext } from "react";
import Context from "../../context/Context";

const ResultsBar = () => {
  const { operationString }: ICalculatorContext = useContext(Context);
  return (
    <div className="resultScreen">
      <span>{operationString}</span>
    </div>
  );
};

export default ResultsBar;
