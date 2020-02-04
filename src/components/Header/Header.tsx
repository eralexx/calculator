import * as React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="upper-header">
        <span className="big">CITIZEN</span>
        <span className="medium">SDC-810BN</span>
      </div>
      <div className="lower-header">
        <span className="medium">10-DIGIT</span>
        <span className="small">2 POWER ◉♨</span>
      </div>
    </div>
  );
};

export default Header;
