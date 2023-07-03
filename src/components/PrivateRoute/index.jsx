import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const PrivateRoute = ({ redirectPath = "/" }) => {
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));
  if (!isLogin || isLogin === "false") {
    console.log("isLogin", isLogin);
    return <Navigate to={redirectPath} />;
  }
  return <Outlet />;
};

export default PrivateRoute;
