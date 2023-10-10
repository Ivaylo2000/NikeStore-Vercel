import AddToCartButton from "../Buttons/AddToCartButton";
import { useDispatch } from "react-redux";
import "./Clothes.css";
import useDataFetching from "../Hooks/useDataFetching";

const Tops = () => {
  const data = useDataFetching(
    "https://shop-190b9-default-rtdb.firebaseio.com/clothes.json"
  );

  const dispatch = useDispatch();

  const addHandler = (top) => {
    dispatch({
      type: "Add",
      payload: top,
    });
  };
  return (
    <>
      <div className="clothesDiv">
        <ul className="clothesUl">
          {data.map((top) => {
            if (top.tag === "top") {
              return (
                <li className="clothesList" key={top.id}>
                  <img src={top.src} />
                  <h2>{top.name}</h2>
                  <h3>{top.price} лв.</h3>
                  <AddToCartButton
                    text={"Add"}
                    onAddToCart={() => addHandler(top)}
                  />
                </li>
              );
            }
          })}
        </ul>
      </div>
    </>
  );
};
export default Tops;
