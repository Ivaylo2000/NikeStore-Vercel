export const calculateTotalPrice = (cartItems) =>
  cartItems.reduce((total, item) => total + +item.price, 0);
