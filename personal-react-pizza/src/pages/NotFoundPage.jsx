// components/NotFoundPage.jsx
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-gray-600 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to={-1} // Go back to previous page
        className="bg-amber-400 text-white font-semibold px-4 py-2 rounded hover:bg-amber-300 transition"
      >
        &larr; Go Back
      </Link>
    </div>
  );
}

export default NotFoundPage;
