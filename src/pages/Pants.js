import ClothingList from "../components/ClothingList";
import useDataFetching from "../Hooks/useDataFetching";
import "./Clothes.css";

const Pants = () => {
  const data = useDataFetching(
    "https://shop-190b9-default-rtdb.firebaseio.com/clothes.json"
  );

  return <ClothingList data={data} tag={"pant"} />;
};
export default Pants;
