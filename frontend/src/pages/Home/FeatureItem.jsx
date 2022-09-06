import React from "react";
import { BannerCard } from "../../components/index.js";
import gloves from "../../assets/images/gloves-ad.jpg";
import jacket from "../../assets/images/jacket-ad.jpg";
const FeatureItem = () => {
  return (
    <div className="feature-container">
      <BannerCard bgImg={gloves} title="Gloves for Bike" />
      <BannerCard bgImg={jacket} title="Biker Jacket" />
    </div>
  );
};

export default FeatureItem;
