import React from "react";
import { useNavigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const navigate = useNavigate();
  if (localStorage.getItem("token")) {
    navigate("/"); // Use the navigate function instead
    return null;
  } else {
    return children;
  }
};

export default PublicRoute;