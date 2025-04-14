import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';


export const DeveloperPanel = () => {
    const role = useSelector(state => state.auth.role)
    return role === "developer" ? <Outlet /> : <Navigate to="/login" replace />;
};