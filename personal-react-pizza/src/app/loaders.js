const API_URL = "https://react-fast-pizza-api.jonas.io/api";

export const fetchMenu = async () => {
  const res = await fetch(`${API_URL}/menu`);
  const data = await res.json();
  console.log(data);
  return data.data;
};

export async function fetchOrder({ params }) {
  const { id } = params;
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) {
    throw new Error("Error while fetching order");
  }
  const { data } = await res.json();
  return data;
}
