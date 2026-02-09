import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../hooks/useUser";
// import { getUser } from "../hooks/useUser";

export default function ProtectedRoute({ children }) {
  // const user = getUser();
  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }
  // if (user.role !== "superAdmin") return <Navigate to="/" />;
  return children;
}
