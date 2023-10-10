import AddToCartButton from "../Buttons/AddToCartButton";

const UseItemDisplay = ({ data, product, onAddHandler }) => {
  console.log(data);
  console.log(product);
  console.log(onAddHandler);

  return (
    <div className="clothesDiv">
      <ul className="clothesUl">
        {data.map((item) => {
          if (item.tag === product) {
            return (
              <li className="clothesList" key={item.id}>
                <img src={item.src} />
                <h2>{item.name}</h2>
                <h3>{item.price} лв.</h3>
                <AddToCartButton
                  text={"Add"}
                  onAddToCart={() => onAddHandler(item)}
                />
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};
export default UseItemDisplay;
