import React from "react";
import AddToCartButton from "../Buttons/AddToCartButton";

const ClothingList = ({ data, tag, onAddHandler }) => {
  return (
    <div className="clothesDiv">
      <ul className="clothesUl">
        {data.map((item) => {
          if (item.tag === tag) {
            return (
              <li className="clothesList" key={item.id}>
                <img src={item.src} alt={item.name} />
                <h2>{item.name}</h2>
                <h3>{item.price} лв.</h3>
                <AddToCartButton
                  text={"Add"}
                  onAddToCart={() => onAddHandler(item)}
                />
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default ClothingList;
