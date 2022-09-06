import React from "react";
import { HomeBanner } from "../../components/index.js";
import DiscountBanner from "./DiscountBanner.jsx";
import FeatureCategory from "./FeatureCategory.jsx";
import FeatureItem from "./FeatureItem.jsx";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <FeatureCategory />
      <FeatureItem />
      <DiscountBanner />
    </div>
  );
};

export default Home;
