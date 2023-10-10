import React from "react";
import { useDispatch } from "react-redux";
import useDataFetching from "../Hooks/useDataFetching";
import "./Clothes.css";
import ClothingList from "../components/ClothingList";

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

  return <ClothingList data={data} tag={"jacket"} onAddHandler={addHandler} />;
};

export default Jackets;
