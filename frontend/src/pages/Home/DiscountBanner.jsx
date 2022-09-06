import React from "react";
import banner from "../../assets/images/banner5.jpg";
const DiscountBanner = () => {
  return (
    <div
      className="discout"
      style={{
        background: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        padding: "80px 0",
      }}
    >
      <div className="discount-container">
        <h3 className="discount-title">Clearance & Discount</h3>
        <h5 className="discount-subtitle">
          Top quality, great selection and expert advice you can trust
        </h5>
        <button className="common-btn2">Shop Now</button>
      </div>
    </div>
  );
};

export default DiscountBanner;
