import React from "react";
import { useSelector } from "react-redux";
import AddToCartButton from "../Buttons/AddToCartButton";
import RemoveFromCartButton from "../Buttons/RemoveFromCartButton";
import { useDispatch } from "react-redux";
import "./Clothes.css";

const Cart = () => {
  const dispatch = useDispatch();

  const removeHandler = (item) => {
    dispatch({
      type: "Remove",
      payload: item,
    });
  };

  const dispatch2 = useDispatch();

  const addHandler = (uniqueItem) => {
    dispatch2({
      type: "Add",
      payload: uniqueItem,
    });
  };

  const cartItems = useSelector((state) => state.items);

  return (
    <>
      <div className="clothesDiv">
        <ul className="clothesUl">
          {cartItems
            .reduce((uniqueItems, item) => {
              const existingItem = uniqueItems.find(
                (uniqueItem) => uniqueItem.id === item.id
              );

              if (!existingItem) {
                uniqueItems.push({ ...item, count: 1 });
              } else {
                existingItem.count++;
              }
              console.log(cartItems);
              return uniqueItems;
            }, [])
            .sort((a, b) => a.id - b.id)
            .map((uniqueItem, index) => (
              <li
                className={`clothesList ${<h4 /> ? "clothesListCart" : ""}`}
                key={index}
              >
                <img src={uniqueItem.src} />
                <h2>{uniqueItem.name}</h2>
                <h3>{uniqueItem.price * uniqueItem.count} лв.</h3>
                <h4>Quantity: {uniqueItem.count}</h4>
                <div className="buttonsHolder">
                  <AddToCartButton
                    text={"+"}
                    onAddToCart={() => addHandler(uniqueItem)}
                  />
                  <RemoveFromCartButton
                    onRemoveFromCart={() => {
                      removeHandler(uniqueItem);
                    }}
                  />
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
export default Cart;
