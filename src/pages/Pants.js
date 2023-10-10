import ClothingList from "../components/ClothingList";
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

  return <ClothingList data={data} tag={"pant"} onAddHandler={addHandler} />;
};
export default Pants;
