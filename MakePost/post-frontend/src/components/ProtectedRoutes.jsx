import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoutes = () => {
    return localStorage.getItem("token") ? <Outlet /> : <Navigate to="/" replace />;
}
