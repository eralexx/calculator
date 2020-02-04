import * as React from "react";
import "./Button.css";

const Button = (props: {
  id: number;
  literal: string;
  pressed?: boolean;
  doubleUp?: boolean;
  doubleDown?: boolean;
}) => {
  const classes = ["button"];
  classes.push(props.pressed ? "pressed" : "unpressed");
  if (props.doubleUp) classes.push("double-up");
  if (props.doubleDown) classes.push("double-down");
  return (
    <div className={classes.join(" ")}>
      <span>{props.literal}</span>
    </div>
  );
};

export default Button;
