import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotalPrice } from "./calculateTotalPrice";
import nikelogowhite from "./nikelogowhite.png";
import "./MainNavigation.css";

const MainNavigation = () => {
  const cartItems = useSelector((state) => state.items);
  const totalCartPrice = calculateTotalPrice(cartItems);

  const dispatch = useDispatch();

  const removeAllHandler = () => {
    dispatch({
      type: "RemoveAll",
    });
  };

  return (
    <div className="topnav">
      <Link to="/" className="link">
        <img className="nikeLogo" src={nikelogowhite} alt="" />
      </Link>
      <Link to="/products/tops" className="link">
        Tops
      </Link>
      <Link to="/products/pants" className="link">
        Pants
      </Link>
      <Link to="/products/shoes" className="link">
        Shoes
      </Link>
      <Link to="/products/jackets" className="link">
        Jackets
      </Link>
      <Link to="/cart" className="link">
        Cart
      </Link>
      <Link to="/cart" className="link">
        Total: {totalCartPrice} лв.
      </Link>
      <p className="link" onClick={removeAllHandler}>
        Remove all items
      </p>
    </div>
  );
};
export default MainNavigation;
