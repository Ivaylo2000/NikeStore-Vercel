import React from "react";
import CardItem from "../components/CardItem";

const ClothingList = ({ data, tag }) => {
  return (
    <div className="clothesDiv">
      <ul className="clothesUl">
        {data.map((item) => {
          if (item.tag === tag) {
            return (
              <CardItem
                id={item.id}
                src={item.src}
                name={item.name}
                price={item.price}
              />
            );
          }
        })}
      </ul>
    </div>
  );
};

export default ClothingList;
