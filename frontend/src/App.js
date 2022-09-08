import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Footer, Header } from "./components/index.js";
import { Home, Login, PrivateRoute, Register, Shop } from "./pages/index.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BuyProduct from "./pages/Shop/BuyProduct.jsx";
import { useSelector } from "react-redux";
import Modal from "./components/Shared/Modal.jsx";

const App = () => {
  const data = useSelector((state) => state.modal);
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className="w-full overflow-hidden">
      {path !== "/login" && path !== "/register" && <Header />}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/shop/:id"
          element={
            <PrivateRoute>
              <BuyProduct />
            </PrivateRoute>
          }
        />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {path !== "/login" && path !== "/register" && <Footer />}
      {data.item && <Modal item={data.item} />}
    </div>
  );
};

export default App;
