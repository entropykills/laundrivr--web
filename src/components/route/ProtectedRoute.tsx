import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export function ProtectedRoute() {
  const { user } = useAuth();
  if (user == null) return <Navigate to="/" />;
  return <Outlet />;
}
