import React from "react";
import gloves from "../../assets/images/gloves-ad.jpg";
const BannerCard = () => {
  return (
    <div
      style={{
        background: `url(${gloves})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full lg:w-1/2 px-8 py-12 rounded-xl"
    >
      <p className="text-base">Power tools of next level</p>
      <h3 className="text-lg lg:text-xl font-bold pt-6 pb-8">Bike Helmet</h3>
      <button className="common-btn3">Shop Now</button>
    </div>
  );
};

export default BannerCard;
