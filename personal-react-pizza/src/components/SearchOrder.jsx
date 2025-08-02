import { useNavigate, Form } from "react-router-dom";

function SearchOrder() {
  const navigation = useNavigate();

  return (
    <div>
      <Form method="post">
        <input
          type="text"
          name="orderId"
          placeholder={
            navigation.state === "submitting"
              ? "searching order..."
              : "Search order #"
          }
          className="px-9 py-2 rounded-full bg-yellow-100 placeholder:text-stone-400 text-gray-700 focus:outline-none focus:ring-yellow focus:ring-opacity-50"
        />
      </Form>
    </div>
  );
}

export default SearchOrder;
