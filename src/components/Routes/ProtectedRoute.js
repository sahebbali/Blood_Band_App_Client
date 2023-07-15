import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import API from "../../services/API";
import { getCurrentUser } from "../../redux/features/auth/authActions";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await API.get("/auth/current-user");
        if (data?.success) {
          dispatch(getCurrentUser(data));
        } else {
          localStorage.clear();
          navigate("/login");
        }
      } catch (error) {
        localStorage.clear();
        console.log(error);
        navigate("/login");
      }
    };

    getUser();
  }, [dispatch, navigate]);

  if (localStorage.getItem("token")) {
    return children;
  } else {
    console.log("hello home");
    navigate("/login");
    return null;
  }
};

export default ProtectedRoute;
