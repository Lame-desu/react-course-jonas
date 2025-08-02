const API_URL = "https://react-fast-pizza-api.jonas.io/api";

export const fetchMenu = async () => {
  const res = await fetch(`${API_URL}/menu`);
  const data = await res.json();
  console.log(data);
  return data.data;
};
