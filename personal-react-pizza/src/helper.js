export function calculateTotalPrice(cartData) {
  const totalPrice = cartData.reduce((prev, curr) => {
    prev += curr.unitPrice * curr.qty;
    return prev;
  }, 0);
  return totalPrice;
}
