import React from "react";
import { HomeBanner } from "../../components/index.js";
import Reviews from "../../components/Review/Review.jsx";
import DiscountBanner from "./DiscountBanner.jsx";
import FeatureCategory from "./FeatureCategory.jsx";
import FeatureItem from "./FeatureItem.jsx";
import HelmetBanner from "./HelmetBanner.jsx";
import HomeProduct from "./HomeProduct.jsx";
import LatestProduct from "./LatestProduct.jsx";
import Summary from "./Summary.jsx";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <FeatureCategory />
      <HomeProduct />
      <DiscountBanner />
      <LatestProduct title="Latest Product" />
      <FeatureItem />
      <HelmetBanner />
      <LatestProduct title="Best Sell" />
      <FeatureItem />
      <Reviews />
      <DiscountBanner />
      <Summary />
    </div>
  );
};

export default Home;
