import useDataFetching from "../Hooks/useDataFetching";
import ClothingList from "../components/ClothingList";

import "./Clothes.css";

const Tops = () => {
  const data = useDataFetching(
    "https://shop-190b9-default-rtdb.firebaseio.com/clothes.json"
  );

  return <ClothingList data={data} tag={"top"} />;
};
export default Tops;
