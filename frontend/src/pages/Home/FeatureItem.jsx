import React from "react";
import { BannerCard } from "../../components/index.js";

const FeatureItem = () => {
  return (
    <div className="px-6 py-24 lg:py-28 flex flex-col lg:flex-row gap-6 items-center justify-between">
      <BannerCard />
      <BannerCard />
    </div>
  );
};

export default FeatureItem;
