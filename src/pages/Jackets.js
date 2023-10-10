import React from "react";
import useDataFetching from "../Hooks/useDataFetching";
import "./Clothes.css";
import ClothingList from "../components/ClothingList";

const Jackets = () => {
  const data = useDataFetching(
    "https://shop-190b9-default-rtdb.firebaseio.com/clothes.json"
  );

  return <ClothingList data={data} tag={"jacket"} />;
};

export default Jackets;
