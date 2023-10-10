import React from "react";
import Button from "../Buttons/Button";
import addHandler from "../ReduxLogic/actions";
import { useDispatch } from "react-redux";

const CardItem = ({ id, name, price, src }) => {
  const dispatch = useDispatch();

  return (
    <li className="clothesList" key={id}>
      <img src={src} alt={name} />
      <h2>{name}</h2>
      <h3>{price} лв.</h3>
      <Button
        text={"Add"}
        onClick={() => addHandler({ id, name, price, src }, dispatch)}
      />
    </li>
  );
};

export default CardItem;
