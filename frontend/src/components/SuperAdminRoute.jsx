import { Navigate } from "react-router-dom";
import { getUser } from "../hooks/useUser";

export default function SuperAdminRoute({ children }) {
  const user = getUser();

  if (!user) return <Navigate to="/login" />;
  if (user.role !== "superAdmin") return <Navigate to="/" />;

  return children;
}
