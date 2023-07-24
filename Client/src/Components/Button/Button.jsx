import React from "react";
import "./Button.css";

const Button = ({ children, ...props }) => {
  return (
    <button type="submit" className="reusablebutton">
      {children}
    </button>
  );
};

export default Button;
