import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export function ProtectedRoute() {
  const { user } = useAuth();
  if (user === undefined) return <Navigate to="/signin" />;
  return <Outlet />;
}
