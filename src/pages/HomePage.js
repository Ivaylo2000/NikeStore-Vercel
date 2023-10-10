import useDataFetching from "../Hooks/useDataFetching";
import CardItem from "../components/CardItem";
import "./Clothes.css";

const HomePage = () => {
  const data = useDataFetching(
    "https://shop-190b9-default-rtdb.firebaseio.com/clothes.json"
  );

  return (
    <>
      <div className="clothesDiv">
        <ul className="clothesUl">
          {data.map((item) => {
            const { id, name, price, src } = item;
            return <CardItem id={id} name={name} price={price} src={src} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default HomePage;
