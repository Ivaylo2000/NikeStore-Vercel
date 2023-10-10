import AddToCartButton from "../Buttons/AddToCartButton";
import { useDispatch } from "react-redux";
import useDataFetching from "../Hooks/useDataFetching";
import "./Clothes.css";

const HomePage = () => {
  const data = useDataFetching(
    "https://shop-190b9-default-rtdb.firebaseio.com/clothes.json"
  );
  const dispatch = useDispatch();

  const addHandler = (allClothes) => {
    dispatch({
      type: "Add",
      payload: allClothes,
    });
  };

  return (
    <>
      <div className="clothesDiv">
        <ul className="clothesUl">
          {data.map((allClothes) => {
            return (
              <li className="clothesList" key={allClothes.id}>
                <img src={allClothes.src} />
                <h2>{allClothes.name}</h2>
                <h3>{allClothes.price} лв.</h3>
                <AddToCartButton
                  text={"Add"}
                  onAddToCart={() => addHandler(allClothes)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default HomePage;
