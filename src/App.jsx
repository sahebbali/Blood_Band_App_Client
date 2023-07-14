import { Routes, Route } from "react-router-dom";
import dotenv from 'dotenv';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import HomePage from "./pages/HomePages";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Donar from "./pages/Dashboard/Doner";
function App() {
 
  return (
    <>
      <ToastContainer />
      <Routes>
      <Route
          path="/donar"
          element={
            <ProtectedRoute>
              <Donar />
            </ProtectedRoute>
          }
        />

      <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App