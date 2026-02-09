import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-green-50">
      <h1 className="text-6xl font-bold text-green-700">404</h1>
      <p className="text-xl mt-4 text-gray-600">
        Oops! This page does not exist 🌿
      </p>

      <Link
        to="/"
        className="mt-6 bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800"
      >
        Go Home
      </Link>
    </div>
  );
}
