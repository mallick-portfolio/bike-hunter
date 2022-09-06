import React from "react";
import banner from "../../assets/images/banner5.jpg";
const DiscountBanner = () => {
  return (
    <div
      className="relative after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-banner z-10"
      style={{
        background: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        padding: "80px 0",
      }}
    >
      <div className="container relative z-20 text-center text-white">
        <h3 className="lg:text-5xl text-3xl font-semibold ">
          Clearance & Discount
        </h3>
        <h5 className="text-lg md:text-xl font-medium pt-4 pb-8">
          Top quality, great selection and expert advice you can trust
        </h5>
        <button className="common-btn2">Shop Now</button>
      </div>
    </div>
  );
};

export default DiscountBanner;
