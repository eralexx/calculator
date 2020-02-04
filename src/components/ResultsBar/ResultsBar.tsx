import React, { useContext } from "react";
import "./ResultsBar.css";
import ICalculatorContext from "../../context/ICalculatorContext";
import Context from "../../context/Context";

const ResultsBar = () => {
  const { displayString, onOff }: ICalculatorContext = useContext(Context);
  return (
    <div className="result-screen-container">
      <div className="background-light">
        <span>{onOff ? "8888888888888888" : ""}</span>
      </div>
      <div className="result-screen">
        <span>{displayString}</span>
      </div>
    </div>
  );
};

export default ResultsBar;
