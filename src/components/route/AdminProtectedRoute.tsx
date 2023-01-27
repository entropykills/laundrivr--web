import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export function AdminProtectedRoute() {
  const { isAdmin } = useAuth();

  if (!isAdmin) return <Navigate to="/" />;
  return <Outlet />;
}
