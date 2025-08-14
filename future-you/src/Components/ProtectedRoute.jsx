import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div className="text-center mt-10 text-lg text-gray-600">Checking authentication...</div>;

  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;