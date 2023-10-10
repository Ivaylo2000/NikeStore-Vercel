import useDataFetching from "../Hooks/useDataFetching";
import "./Clothes.css";
import ClothingList from "../components/ClothingList";

const Shoes = () => {
  const data = useDataFetching(
    "https://shop-190b9-default-rtdb.firebaseio.com/clothes.json"
  );

  return <ClothingList data={data} tag={"shoe"} />;
};
export default Shoes;
