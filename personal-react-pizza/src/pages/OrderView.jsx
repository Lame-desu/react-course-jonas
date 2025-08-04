import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useFetcher } from "react-router-dom";
import Spin from "../components/UI/Spin";
import { useDispatch } from "react-redux";
import { setLoading } from "../features/ui/uiSlice";
const API_URL = "https://react-fast-pizza-api.jonas.io/api";

function OrderView() {
  const menuFetcher = useFetcher();
  const actionFetcher = useFetcher();
  const dispatcher = useDispatch();
  const orderData = useLoaderData();

  useEffect(() => {
    menuFetcher.load("/menu");
  }, []);

  useEffect(() => {
    if (
      menuFetcher.state === "loading" ||
      actionFetcher.state === "submitting"
    ) {
      dispatcher(setLoading(true));
    } else {
      dispatcher(setLoading(false));
    }
  }, [menuFetcher.state, actionFetcher.state, dispatcher]);

  function getRemainingTime(deliveryTimeString) {
    const now = new Date();
    const deliveryTime = new Date(deliveryTimeString);
    const diffMs = deliveryTime - now;

    if (diffMs <= 0) return "Order should have arrived";

    const diffMinutes = Math.floor(diffMs / (1000 * 60)) % 60;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

    if (diffHours > 0) {
      return `Only ${diffHours}h ${diffMinutes}m left 😃`;
    } else {
      return `Only ${diffMinutes}m left 😃`;
    }
  }

  function formatDeliveryDate(deliveryTimeString) {
    const deliveryDate = new Date(deliveryTimeString);

    const options = {
      month: "short", // Aug
      day: "numeric", // 3
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const formatted = deliveryDate.toLocaleString("en-US", options);
    return formatted;
  }

  function makePriority() {
    actionFetcher.submit({ priority: true }, { method: "PATCH" });
  }

  return (
    <div className="max-w-3xl mx-auto ">
      <div className="flex justify-between py-6">
        <h1 className="text-xl text-gray-700 font-semibold">
          Order #{orderData.id} status
        </h1>
        <div className="flex gap-2">
          {orderData.priority && (
            <p className="rounded-full py-1 px-4 bg-red-500 text-gray-200 uppercase font-semibold ">
              priority
            </p>
          )}
          <p className="rounded-full py-1 px-4 bg-green-400 text-gray-200 uppercase font-semibold ">
            {orderData.status}
          </p>
        </div>
      </div>
      <div className="flex justify-between py-4 px-5 bg-stone-200 mb-10">
        <h2 className="font-semibold text-stone-700 text-lg">
          {getRemainingTime(orderData.estimatedDelivery)}
        </h2>
        <p className="text-sm text-stone-500">
          (Estimated delivery: {formatDeliveryDate(orderData.estimatedDelivery)}
          )
        </p>
      </div>
      <ul className="border-t-1 border-t-gray-200">
        {orderData?.cart?.map((item) => {
          const { pizzaId, name, quantity, totalPrice } = item;
          const ingredients = menuFetcher.data?.find(
            (item) => item.id === pizzaId
          )?.ingredients;

          return (
            <li className="flex justify-between py-3 border-b-1 border-b-gray-200">
              <div>
                <p>
                  {quantity}x {name}
                </p>
                <p className="text-sm italic capitalize text-stone-500">
                  {ingredients?.join(", ") || ""}
                </p>
              </div>
              <div className="font-semibold">€{totalPrice}</div>
            </li>
          );
        })}
      </ul>
      <div className="mt-8 py-8 px-7 bg-stone-200">
        <p>Price pizza: €{orderData.orderPrice?.toFixed(2)}</p>
        {orderData.priority && (
          <p>Price priority: €{orderData.priorityPrice.toFixed(2)}</p>
        )}
        <p className="font-semibold">
          To pay on delivery: €
          {(
            orderData.orderPrice +
            (orderData.priority ? orderData.priorityPrice : 0)
          ).toFixed(2)}
        </p>
      </div>
      <div className="flex justify-end mt-4">
        {orderData.priority === false && (
          <button
            onClick={makePriority}
            className="bg-amber-300 rounded-full py-3 px-3 font-semibold hover:bg-amber-200"
          >
            MAKE PRIORITY
          </button>
        )}
      </div>
    </div>
  );
}

export default OrderView;
