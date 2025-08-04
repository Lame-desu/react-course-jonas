import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import CartItem from "../components/CartItem";

function Cart() {
  const userName = useSelector((state) => state.user.name);
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemsArray = Object.values(cartItems);

  const dispatch = useDispatch();

  if (cartItemsArray.length <= 0) {
    return (
      <div className="flex flex-col gap-11 justify-center max-w-3xl mx-auto">
        <Link className="text-blue-600  pt-9" to="/menu">
          &larr; Back to menu
        </Link>
        <p>Your cart is still empty. Start adding some pizzas :)</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-7 mt-6 text-[17px]">
      <Link className="block text-blue-500" to="/menu">
        &larr; Back to menu
      </Link>
      <h1 className="text-xl">{`Your cart, ${userName}`}</h1>
      <ul className="space-y-6 ">
        {cartItemsArray.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </ul>
      <div className="flex gap-6 items-center justify-start">
        <Link
          to="/order/new"
          className="bg-amber-300 px-4 py-3 rounded-full hover:bg-amber-200"
        >
          Order Pizzas
        </Link>

        <button
          onClick={() => dispatch(clearCart())}
          className="px-4 py-3 rounded-full  border-2 border-neutral-300 hover:bg-gray-400"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
