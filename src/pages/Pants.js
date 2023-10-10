import AddToCartButton from "../Buttons/AddToCartButton";
import { useDispatch } from "react-redux";
import useDataFetching from "../Hooks/useDataFetching";
import "./Clothes.css";

const Pants = () => {
  const data = useDataFetching(
    "https://shop-190b9-default-rtdb.firebaseio.com/clothes.json"
  );

  const dispatch = useDispatch();

  const addHandler = (pant) => {
    dispatch({
      type: "Add",
      payload: pant,
    });
  };
  return (
    <>
      <div className="clothesDiv">
        <ul className="clothesUl">
          {data.map((pant) => {
            if (pant.tag === "pant") {
              return (
                <li className="clothesList" key={pant.id}>
                  <img src={pant.src} />
                  <h2>{pant.name}</h2>
                  <h3>{pant.price} лв.</h3>
                  <AddToCartButton
                    text={"Add"}
                    onAddToCart={() => addHandler(pant)}
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
export default Pants;
