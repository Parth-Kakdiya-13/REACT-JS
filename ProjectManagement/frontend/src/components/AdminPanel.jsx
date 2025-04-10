import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const AdminPanel = () => {
    const role = localStorage.getItem("role");

    return role === "admin" ? <Outlet /> : <Navigate to="/login" replace />;
};