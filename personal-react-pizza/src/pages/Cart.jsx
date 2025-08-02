import { Link, useRouteLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  increase,
  decrease,
  deleteItem,
  clearCart,
} from "../features/cart/cartSlice";

function Cart() {
  const userName = useSelector((state) => state.user.name);
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemsArray = Object.values(cartItems);

  const dispatch = useDispatch();

  function calculateTotalPrice(unitPrice, quantity) {
    return unitPrice * quantity;
  }

  function handleChange(type, id = null) {
    switch (type) {
      case "increase":
        dispatch(increase({ id }));
        break;
      case "decrease":
        dispatch(decrease({ id }));
        break;
      case "delete":
        dispatch(deleteItem({ id }));
        break;
      case "clearCart":
        dispatch(clearCart());
        break;
      default:
        return;
    }
  }

  return (
    <div className="max-w-3xl mx-auto space-y-7 mt-6 text-[17px]">
      <Link className="block text-blue-500" to="/menu">
        &larr; Back to menu
      </Link>
      <h1 className="text-xl">{`Your cart, ${userName}`}</h1>
      <ul className="space-y-6 ">
        {cartItemsArray.map((item) => {
          const { id, name, qty, unitPrice } = item;
          return (
            <li
              key={id}
              className="flex justify-between items-center border-b border-b-gray-200"
            >
              <div>{`${qty}x ${name}`}</div>
              <div className="flex gap-7">
                <div>{`€${calculateTotalPrice(unitPrice, qty).toFixed(2)}`}</div>
                <div className="flex gap-4 items-center">
                  <button
                    onClick={() => handleChange("decrease", id)}
                    className="bg-amber-300 px-4 py-1 rounded-full hover:bg-amber-200"
                  >
                    -
                  </button>
                  <span>{qty}</span>
                  <button
                    onClick={() => handleChange("increase", id)}
                    className="bg-amber-300 px-4 py-1 rounded-full hover:bg-amber-200"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleChange("delete", id)}
                  className="bg-amber-300 px-4 py-1 rounded-full hover:bg-amber-200"
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="flex gap-6 items-center justify-start">
        <Link
          to="/orderNew"
          className="bg-amber-300 px-4 py-3 rounded-full hover:bg-amber-200"
        >
          Order Pizzas
        </Link>
        <button
          onClick={() => handleChange("clearCart")}
          className="px-4 py-3 rounded-full  border-2 border-neutral-300 hover:bg-gray-400"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
