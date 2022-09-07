import React from "react";
import banner from "../../assets/images/shopbanner.jpg";
import { Link } from "react-router-dom";
const ShopBanner = () => {
  return (
    <div
      style={{
        background: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        padding: "120px 0",
      }}
    >
      <div className="container text-white text-center relative z-20">
        <h3 className="text-4xl font-semibold mb-6">Shop Page</h3>
        <button className="text-base font-medium">
          <Link to="/">
            <span className="text-primary mr-1">Home</span>
          </Link>
          {"/"}
          <span className="ml-1">Shop</span>
        </button>
      </div>
    </div>
  );
};

export default ShopBanner;
