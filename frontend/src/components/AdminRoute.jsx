import { Navigate } from "react-router-dom";
import { getUser } from "../hooks/useUser";

export default function AdminRoute({ children }) {
  const user = getUser();

  if (!user) return <Navigate to="/login" />;
  if (!["admin", "superAdmin"].includes(user.role))
    return <Navigate to="/" />;

  return children;
}
