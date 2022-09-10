import React from "react";
import { CommonBanner } from "../../components/index.js";
import banner from "../../assets/images/pic2.png";
const About = () => {
  return (
    <div>
      <CommonBanner bannerImg={banner} title="About Page" bread="shop" />
    </div>
  );
};

export default About;
