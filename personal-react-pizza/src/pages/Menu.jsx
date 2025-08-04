import { useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCartItems } from "../features/cart/cartSlice";

// src/routes/Menu.jsx
import MenuItem from "../components/MenuItem";

export default function Menu() {
  const cart = useSelector(getCartItems);
  const menu = useLoaderData();
  // Fetch menu on mount

  return (
    <div className="min-h-screen p-4">
      <ul className="max-w-3xl mx-auto space-y-6">
        {menu.map((pizza) => {
          const inCart = cart[pizza.id];
          return <MenuItem key={pizza.id} pizza={pizza} inCart={inCart} />;
        })}
      </ul>
    </div>
  );
}
