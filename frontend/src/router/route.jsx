import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider"

import AuthService from '../services/auth.service.jsx';



const PrivateRoute = () => {

  const isAuthenticated = AuthService.getCurrentUser();

  if (!isAuthenticated) return <Navigate to="/login" />;
  return <Outlet />;
};

export default PrivateRoute;