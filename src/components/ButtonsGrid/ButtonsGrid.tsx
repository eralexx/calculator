import * as React from "react";
import "./ButtonsGrid.css";

const ButtonsGrid = (props: { children: JSX.Element[] }) => {
  return (
    <div className="grid">
      <>{props.children}</>
    </div>
  );
};

export default ButtonsGrid;
