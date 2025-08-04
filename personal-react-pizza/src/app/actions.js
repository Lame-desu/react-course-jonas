import { redirect } from "react-router-dom";
const API_URL = "https://react-fast-pizza-api.jonas.io/api";

export async function orderSearch({ request }) {
  const formData = await request.formData();
  const id = formData.get("orderId");
  // do something with this orderId
  if (id === "") return;
  return redirect(`/order/${id}`);
}

export async function orderNew({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const newOrder = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };
  const res = await fetch(`${API_URL}/order`, {
    method: "POST",
    body: JSON.stringify(newOrder),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Couldn't complete the order");
  }

  const resData = await res.json();
  const orderId = resData.data.id;
  return redirect(`/order/${orderId}`);
}

export async function makePriority({ request, params }) {
  // const formData = await request.formData();
  // const data = Object.fromEntries(formData);
  const { id } = params;
  const data = { priority: true };
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        content: "application/json",
      },
    });
    console.log(res);
    if (!res.ok) {
      throw new Error("Error while making order priority");
    }
  } catch (error) {
    console.log(error.message);
  }

  return null;
}
