import React from "react";
import "./Buttons.css";
const RemoveFromCartButton = ({ onRemoveFromCart }) => {
  return (
    <button className="RemoveButton" onClick={onRemoveFromCart}>
      -
    </button>
  );
};
export default RemoveFromCartButton;
