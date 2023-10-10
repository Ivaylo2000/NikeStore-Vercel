import { useDispatch } from "react-redux";
import useDataFetching from "../Hooks/useDataFetching";
import "./Clothes.css";
import ClothingList from "../components/ClothingList";

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

  return <ClothingList data={data} tag={"shoe"} onAddHandler={addHandler} />;
};
export default Shoes;
