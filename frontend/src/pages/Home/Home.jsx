import React from "react";
import { HomeBanner } from "../../components/index.js";
import DiscountBanner from "./DiscountBanner.jsx";
import FeatureCategory from "./FeatureCategory.jsx";
import FeatureItem from "./FeatureItem.jsx";
import HelmetBanner from "./HelmetBanner.jsx";
import HomeProduct from "./HomeProduct.jsx";
import LatestProduct from "./LatestProduct.jsx";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <FeatureCategory />
      <HomeProduct />
      <DiscountBanner />
      <LatestProduct />
      <FeatureItem />
      <HelmetBanner />
    </div>
  );
};

export default Home;
