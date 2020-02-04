import React, { useContext } from "react";
import "./Button.css";
import ICalculatorContext from "../../context/ICalculatorContext";
import Context from "../../context/Context";
import { Operations } from "../../enums/Operations";

const Button = (props: {
  id: number;
  backgroundColor: string;
  foregroundColor: string;
  literal: string;
  pressed?: boolean;
  doubleUp?: boolean;
  doubleDown?: boolean;
  rounded?: boolean;
}) => {
  const {
    setState: setGlobalState,
    calculate,
    onOff,
    displayString
  }: ICalculatorContext = useContext(Context);

  const classes = [
    "button",
    "background-" + props.backgroundColor,
    "foreground-" + props.foregroundColor
  ];
  classes.push(props.pressed ? "pressed" : "unpressed");
  if (props.rounded) classes.push("rounded");
  if (props.doubleUp) classes.push("double-up");
  if (props.doubleDown) classes.push("double-down");

  const handleOnClick = () => {
    if (onOff) {
      switch (props.id) {
        case Operations.Enter:
          calculate(Operations.Enter);
          break;
        case Operations.RightArrow:
          calculate(Operations.RightArrow);
          break;
        case Operations.Sum:
          calculate(Operations.Sum);
          break;
        default:
          setGlobalState({
            displayString: displayString + props.literal
          } as ICalculatorContext);
          break;
      }
    }

    if (props.id === Operations.OnOff)
      setGlobalState({ onOff: true } as ICalculatorContext);
  };

  return (
    <div className={classes.join(" ")} onClick={() => handleOnClick()}>
      <span>{props.literal}</span>
    </div>
  );
};

export default Button;
