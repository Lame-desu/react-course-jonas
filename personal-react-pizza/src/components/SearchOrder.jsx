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
          className="px-9 py-2 rounded-full bg-yellow-100 placeholder:text-stone-400 text-gray-700 focus:outline-none  focus:px-12 transition-all focus:border-amber-500 focus:ring-4 focus:ring-amber-400 focus:ring-opacity-50"
        />
      </Form>
    </div>
  );
}

export default SearchOrder;
