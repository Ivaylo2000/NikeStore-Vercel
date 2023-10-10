import AddToCartButton from "../Buttons/AddToCartButton";
import { useDispatch } from "react-redux";
import useDataFetching from "../Hooks/useDataFetching";
import "./Clothes.css";

const Shoes = () => {
  const data = useDataFetching(
    "https://shop-190b9-default-rtdb.firebaseio.com/clothes.json"
  );

  const dispatch = useDispatch();

  const addHandler = (shoe) => {
    dispatch({
      type: "Add",
      payload: shoe,
    });
  };

  return (
    <>
      <div className="clothesDiv">
        <ul className="clothesUl">
          {data.map((shoe) => {
            if (shoe.tag === "shoe") {
              return (
                <li className="clothesList" key={shoe.id}>
                  <img src={shoe.src} />
                  <h2>{shoe.name}</h2>
                  <h3>{shoe.price} лв.</h3>
                  <AddToCartButton
                    text={"Add"}
                    onAddToCart={() => addHandler(shoe)}
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
export default Shoes;
