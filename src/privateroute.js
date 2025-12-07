import React from "react";
import { Navigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    const decoded = jwtDecode(token);
    const isExpired = decoded.exp * 1000 < Date.now();

    if (isExpired) {
      localStorage.removeItem("accessToken");
      return <Navigate to="/login" replace />;
    }

    return children;
  } catch (error) {
    // Invalid token (not decodable)
    localStorage.removeItem("accessToken");
    return <Navigate to="/login" replace />;
  }
};

export default PrivateRoute;
