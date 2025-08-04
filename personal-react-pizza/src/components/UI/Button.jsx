import { useDispatch } from "react-redux";
import {
  addToCart,
  decrease,
  deleteItem,
  increase,
} from "../../features/cart/cartSlice";

function Button({ type, arg, children }) {
  const dispatch = useDispatch();
  const handleCartOperation = (type, arg) => {
    console.log(arg);
    switch (type) {
      case "increase":
        dispatch(increase({ id: arg }));
        break;
      case "decrease":
        dispatch(decrease({ id: arg }));
        break;
      case "addToCart":
        dispatch(addToCart({ pizza: arg }));
        break;
      case "deleteItem":
        dispatch(deleteItem({ id: arg }));
        break;
      default:
        return null;
    }
  };

  return (
    <button
      onClick={() => handleCartOperation(type, arg)}
      className="bg-yellow-400 px-3 py-1 rounded-full font-semibold"
    >
      {children}
    </button>
  );
}

export default Button;
