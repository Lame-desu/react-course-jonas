import { redirect } from "react-router-dom";

export async function orderSearch({ request }) {
  const formData = await request.formData();
  const id = formData.get("orderId");
  // do something with this orderId
  if (id === "") return;
  return redirect(`/order/${id}`);
}
