import AddToCartButton from "../Buttons/AddToCartButton";
import { useDispatch } from "react-redux";
import useDataFetching from "../Hooks/useDataFetching";
import "./Clothes.css";

const Jackets = () => {
  const data = useDataFetching(
    "https://shop-190b9-default-rtdb.firebaseio.com/clothes.json"
  );

  const dispatch = useDispatch();

  const addHandler = (jacket) => {
    dispatch({
      type: "Add",
      payload: jacket,
    });
  };
  return (
    <>
      <div className="clothesDiv">
        <ul className="clothesUl">
          {data.map((jacket) => {
            if (jacket.tag === "jacket") {
              return (
                <li className="clothesList" key={jacket.id}>
                  <img src={jacket.src} />
                  <h2>{jacket.name}</h2>
                  <h3>{jacket.price} лв.</h3>
                  <AddToCartButton
                    text={"Add"}
                    onAddToCart={() => addHandler(jacket)}
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
export default Jackets;
