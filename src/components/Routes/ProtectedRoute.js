import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import API from "../../services/API";
import { getCurrentUser } from "../../redux/features/auth/authActions";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //get user current
  const getUser = async () => {
    try {
      const { data } = await API.get("/auth/current-user");
      if (data?.success) {
        dispatch(getCurrentUser(data));
      }
    } catch (error) {
      localStorage.clear();
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, );

  if (localStorage.getItem("token")) {
    return children;
  } else {
    navigate("/login"); // Use the navigate function instead
    return null; // Return null or a loading component while redirecting
  }
};

export default ProtectedRoute;
