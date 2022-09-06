import React from "react";
import { Routes, Route } from "react-router-dom";
import { Footer, Header } from "./components/index.js";
import { Home, Login, Register } from "./pages/index.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
