import React from "react";
import "./App.css";
import Button from "./components/Button";
import ResultsBar from "./components/ResultsBar";
import Calculator from "./components/Calculator";
import ButtonsGrid from "./components/ButtonsGrid";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Calculator>
        <Header />
        <ResultsBar />
        <ButtonsGrid>
          <Button id={1} literal={"MRC"} />
          <Button id={2} literal={"M-"} />
          <Button id={3} literal={"M+"} />
          <Button id={5} literal={"+/-"} />
          <Button id={6} literal={"ON"} />
          <Button id={7} literal={"7"} />
          <Button id={8} literal={"8"} />
          <Button id={9} literal={"9"} />
          <Button id={10} literal={"%"} />
          <Button id={11} literal={"→"} />
          <Button id={12} literal={"4"} />
          <Button id={13} literal={"5"} />
          <Button id={14} literal={"6"} />
          <Button id={15} literal={"x"} />
          <Button id={16} literal={"÷"} />
          <Button id={17} literal={"1"} />
          <Button id={18} literal={"2"} />
          <Button id={19} literal={"3"} />
          <Button id={20} doubleUp literal={"+"} />
          <Button id={21} literal={"-"} />
          <Button id={22} literal={"0"} />
          <Button id={23} literal={"00"} />
          <Button id={24} literal={"."} />
          <Button id={20} doubleDown literal={""} />
          <Button id={25} literal={"="} />
        </ButtonsGrid>
      </Calculator>
    </div>
  );
};

export default App;
