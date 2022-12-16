import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

function ProtectedRoute() {
  const navigate = useNavigate();
  console.log(navigate);
  const isLoggedIn = false;
  return (
    <>
      {isLoggedIn ? <Outlet /> : navigate("/login")}
      {/* element way of passing the navigate */}
      {/* {isLoggedIn ? <Outlet /> : <Navigate to="/login" />} */}
      ProtectedRoute
      <Outlet />
    </>
  );
}

export default ProtectedRoute;
