import React from "react";
import { HomeBanner } from "../../components/index.js";
import DiscountBanner from "./DiscountBanner.jsx";
import FeatureCategory from "./FeatureCategory.jsx";
import FeatureItem from "./FeatureItem.jsx";
import HomeProduct from "./HomeProduct.jsx";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <FeatureCategory />
      <HomeProduct />
      <FeatureItem />
      <DiscountBanner />
    </div>
  );
};

export default Home;
