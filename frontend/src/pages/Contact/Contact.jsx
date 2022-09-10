import React from "react";
import { CommonBanner } from "../../components/index.js";
import banner from "../../assets/images/pic2.png";
import ContactUs from "./ContactUs.jsx";
const Contact = () => {
  return (
    <div>
      <CommonBanner bannerImg={banner} title="Contact Page" bread="contact" />
      <ContactUs />
    </div>
  );
};

export default Contact;
