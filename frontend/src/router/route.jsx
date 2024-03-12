import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import AuthService from "../services/auth.service.jsx";

const PrivateRoute = () => {
  const isAuthenticated = AuthService.getJwt();

  if (!isAuthenticated) return <Navigate to="/sign-in" />;
  return <Outlet />;
};

export default PrivateRoute;
