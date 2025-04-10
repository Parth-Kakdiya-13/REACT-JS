import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const DeveloperPanel = () => {
    const role = localStorage.getItem("role");

    return role === "developer" ? <Outlet /> : <Navigate to="/login" replace />;
};