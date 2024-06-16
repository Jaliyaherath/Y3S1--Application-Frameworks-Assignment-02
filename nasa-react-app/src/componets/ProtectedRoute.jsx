// ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function ProtectedRoute() {
    const { user } = useAuth();//use the auth data

    
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    
    return <Outlet />;
}

export default ProtectedRoute;
