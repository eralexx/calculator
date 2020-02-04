import React, { useContext } from "react";
import "./Button.css";
import ICalculatorContext from "../../context/ICalculatorContext";
import Context from "../../context/Context";
import { ButtonId } from "../../enums/ButtonId";

const Button = (props: {
  id: number;
  backgroundColor: string;
  foregroundColor: string;
  literal: string;
  pressed?: boolean;
  doubleUp?: boolean;
  doubleDown?: boolean;
}) => {
  const {
    setState: setGlobalState,
    calculate,
    operationString
  }: ICalculatorContext = useContext(Context);

  const classes = [
    "button",
    "background-" + props.backgroundColor,
    "foreground-" + props.foregroundColor
  ];
  classes.push(props.pressed ? "pressed" : "unpressed");
  if (props.doubleUp) classes.push("double-up");
  if (props.doubleDown) classes.push("double-down");

  const handleOnClick = () => {
    switch (props.id) {
      case ButtonId.enter:
        calculate();
        break;
      case ButtonId.onOff:
        setGlobalState({
          onOff: true,
          operationString: ""
        } as ICalculatorContext);
        break;
      case ButtonId.rightArrow:
        break;
      case ButtonId.sumAlt:
        let newString = operationString + "+";
        if (newString.length <= 10) {
          setGlobalState({
            operationString: newString
          } as ICalculatorContext);
        }
        break;
      default:
        let newString2 = operationString + props.literal;
        if (newString2.length <= 10) {
          setGlobalState({
            operationString: newString2
          } as ICalculatorContext);
        }
        break;
    }
  };

  return (
    <div className={classes.join(" ")} onClick={() => handleOnClick()}>
      <span>{props.literal}</span>
    </div>
  );
};

export default Button;
