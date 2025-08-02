import { Link, useLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increase,
  decrease,
  deleteItem,
} from "../features/cart/cartSlice";

// src/routes/Menu.jsx
import { useState } from "react";

export default function Menu() {
  const cart = useSelector((state) => state.cart.items);
  console.log(cart);
  const menu = useLoaderData();
  // Fetch menu on mount

  const dispatch = useDispatch();

  function handleCart(type, id) {
    switch (type) {
      case "addToCart":
        console.log(id);
        dispatch(addToCart({ id }));
        break;
      case "removeFromCart":
        dispatch(deleteItem({ id }));
        break;
      case "decrease":
        dispatch(decrease({ id }));
        break;
      case "increase":
        dispatch(increase({ id }));
        break;
      default:
        return;
    }
  }

  return (
    <div className="min-h-screen p-4">
      <ul className="max-w-3xl mx-auto space-y-6">
        {menu.map((pizza) => {
          const { id, name, ingredients, unitPrice, soldOut, imageUrl } = pizza;
          const inCart = cart[id];

          return (
            <li
              key={id}
              className="flex items-center border-b border-b-slate-300 pb-4"
            >
              <img
                src={imageUrl}
                alt={name}
                className={`w-28 h-28 object-cover rounded ${
                  soldOut ? "grayscale" : ""
                }`}
              />

              <div className="ml-6 flex-1">
                <h3 className="font-semibold">{name}</h3>
                <p className="text-sm italic capitalize text-gray-600 mb-9">
                  {ingredients.join(", ")}
                </p>
                {soldOut ? (
                  <p className="mt-1 text-gray-400 text-lg font-semibold ">
                    SOLD OUT
                  </p>
                ) : (
                  <p className="mt-1 text-sm font-medium">{`€${unitPrice.toFixed(2)}`}</p>
                )}
              </div>

              {/* Cart Controls */}
              {!soldOut && (
                <div className="flex items-center gap-2">
                  {inCart ? (
                    <>
                      <button
                        onClick={() => handleCart("decrease", id)}
                        className="bg-yellow-400 px-3 py-1 rounded-full font-medium"
                      >
                        -
                      </button>
                      <span className="font-medium">{inCart.qty}</span>
                      <button
                        onClick={() => handleCart("increase", id)}
                        className="bg-yellow-400 px-3 py-1 rounded-full font-medium"
                      >
                        +
                      </button>
                      <button
                        onClick={() => handleCart("removeFromCart", id)}
                        className="ml-2 bg-yellow-400 px-4 py-1 rounded-full font-bold"
                      >
                        DELETE
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => handleCart("addToCart", pizza)}
                      className="bg-yellow-400 px-4 py-2 rounded-full font-semibold"
                    >
                      ADD TO CART
                    </button>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
