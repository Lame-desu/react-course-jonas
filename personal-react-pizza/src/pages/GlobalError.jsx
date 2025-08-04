// components/GlobalError.jsx
import { useRouteError, Link } from "react-router-dom";

function GlobalError() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-3xl font-bold text-red-600 mb-4">
        Something went wrong 😢
      </h1>
      <p className="text-gray-700 mb-4">
        {error.message || "Unexpected error occurred."}
      </p>
      <p className="text-sm text-gray-500 mb-6">Try again or go back.</p>
      <div className="flex gap-3">
        <button
          onClick={() => window.location.reload()}
          className="bg-amber-400 text-white font-semibold px-4 py-2 rounded hover:bg-amber-300 transition"
        >
          Reload Page
        </button>
        <Link
          to={-1}
          className="bg-gray-300 text-gray-800 font-semibold px-4 py-2 rounded hover:bg-gray-200 transition"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
}

export default GlobalError;
