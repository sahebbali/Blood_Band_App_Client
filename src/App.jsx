import { Routes, Route } from "react-router-dom";
import dotenv from 'dotenv';
// import ProtectedRoute from './components/Routes/ProtectedRoute'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import HomePage from "./pages/HomePages";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
function App() {
 
  return (
    <>
      <ToastContainer />
      <Routes>
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