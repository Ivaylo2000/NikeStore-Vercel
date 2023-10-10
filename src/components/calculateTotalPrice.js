export const calculateTotalPrice = (cartItems) => {
  let total = 0;

  for (const item of cartItems) {
    total = total + +item.price;
  }

  return total;
};
