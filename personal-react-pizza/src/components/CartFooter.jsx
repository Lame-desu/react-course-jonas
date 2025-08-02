import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartFooter() {
  const cart = useSelector((state) => state.cart.items);
  const cartData = Object.values(cart);
  const numberOfPizzas = cartData.length;
  function calculateTotalPrice(cartData) {
    const totalPrice = cartData.reduce((prev, curr) => {
      prev += curr.unitPrice * curr.qty;
      return prev;
    }, 0);
    return totalPrice;
  }

  if (numberOfPizzas <= 0) {
    return;
  }

  return (
    <footer className="fixed bottom-0 left-0 flex justify-between w-full bg-gray-800 text-blue-50 py-4 text-xl px-3.5">
      <div className="space-x-6">
        <span>{`${numberOfPizzas} PIZZAS`}</span>{" "}
        <span> {`€${calculateTotalPrice(cartData).toFixed(2)}`}</span>
      </div>
      <Link to="/cart">OPEN CART &rarr;</Link>
    </footer>
  );
}

export default CartFooter;
