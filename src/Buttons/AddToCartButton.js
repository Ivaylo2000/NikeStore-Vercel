import React from "react";
import "./Buttons.css";

const AddToCartButton = ({ text, onAddToCart }) => {
  return (
    <button className="AddButton" onClick={onAddToCart}>
      {text}
    </button>
  );
};

export default AddToCartButton;
