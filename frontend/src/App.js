import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Footer, Header } from "./components/index.js";
import { Home, Login, Register } from "./pages/index.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className="w-full overflow-hidden">
      {path !== "/login" && path !== "/register" && <Header />}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {path !== "/login" && path !== "/register" && <Footer />}
    </div>
  );
};

export default App;
