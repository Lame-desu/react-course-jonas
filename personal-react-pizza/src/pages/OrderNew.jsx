import { useEffect, useRef, useState } from "react";
import { Form, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { calculateTotalPrice } from "../helper";
import { getPosition } from "../api";

function OrderNew() {
  const positionRef = useRef(null);
  const firstNameRef = useRef(null);
  const [error, setError] = useState(null);
  const [position, setPosition] = useState({});
  const name = useSelector((state) => state.user.name);
  const cartData = useSelector((state) => state.cart.items);
  const cartDataArray = Object.values(cartData);

  const formattedCartData = cartDataArray.map((item) => {
    return {
      pizzaId: item.id,
      name: item.name,
      quantity: item.qty,
      unitPrice: item.unitPrice,
      totalPrice: item.unitPrice * item.qty,
    };
  });

  async function handleGetPosition() {
    try {
      const val = await getPosition();
      setPosition(val.position);
      positionRef.current.value = val.formatted;
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    if (name) {
      firstNameRef.current.value = name;
    }
  }, [name]);

  if (cartDataArray.length <= 0) {
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
    <section className="pt-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-700 mb-5">
        Ready to order? Let's go!
      </h1>
      <Form method="post">
        <div className="space-y-5">
          <div className="flex items-center">
            <label className="basis-40 text-lg" htmlFor="customer">
              First Name
            </label>
            <input
              ref={firstNameRef}
              className="grow border border-gray-300 bg-white focus:outline-none focus:ring-4 focus:ring-amber-300 rounded-full transition-all duration-300 py-2 px-4"
              type="text"
              name="customer"
              required
            />
          </div>
          <div className="flex items-center">
            <label className="basis-40 text-lg" htmlFor="phone">
              Phone number
            </label>
            <input
              className="grow border border-gray-300 bg-white focus:outline-none focus:ring-4 focus:ring-amber-300 rounded-full transition-all duration-300 py-2 px-4"
              type="text"
              name="phone"
              required
            />
          </div>
          <div className="flex items-center">
            <label className="basis-40 text-lg" htmlFor="address">
              Address
            </label>
            <div className="grow">
              <div className="relative">
                <input
                  className="w-full border border-gray-300 bg-white focus:outline-none focus:ring-4 focus:ring-amber-300 rounded-full transition-all duration-300 py-2 px-4"
                  type="text"
                  required
                  ref={positionRef}
                  name="address"
                />
                <button
                  type="button"
                  onClick={handleGetPosition}
                  className="absolute right-1 top-1 bottom-1 bg-amber-300 py-1 px-3 hover:bg-amber-200 rounded-full "
                >
                  GET POSITION
                </button>
              </div>
              {error && <p className="text-red-400 mt-4 pl-1">{error}</p>}
            </div>
          </div>
          <div className="gap-4 flex items-center text-lg">
            <input
              className="w-[22px] h-[22px] accent-yellow-400 focus:ring-amber-300 focus:ring-4 focus:ring-offset-2"
              type="checkbox"
              name="priority"
            />
            <label htmlFor="priority">
              Want to yo give your order priority?
            </label>
            <input
              type="hidden"
              name="cart"
              value={JSON.stringify(formattedCartData)}
            />

            <input
              type="hidden"
              name="position"
              value={position ? JSON.stringify(position) : ""}
            />
          </div>
          <button
            className="block bg-amber-300 py-2 px-3 rounded-full hover:bg-amber-200"
            type="submit"
          >
            ORDER NOW FOR €{calculateTotalPrice(Object.values(cartData))}
          </button>
        </div>
      </Form>
    </section>
  );
}

export default OrderNew;
