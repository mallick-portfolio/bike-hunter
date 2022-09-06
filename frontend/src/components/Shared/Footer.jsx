import React from "react";
import FooterCard from "./FooterCard.jsx";
import FooterLogo from "./FooterLogo.jsx";
const Footer = () => {
  return (
    <div className="footer-container">
      <FooterLogo />
      <FooterCard items={generalLink} title="general Link" />
      <FooterCard items={services} title="Our Services" />
      <FooterCard items={services} title="Our Services" />
    </div>
  );
};

const generalLink = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Blog",
  },
  {
    id: 3,
    name: "Contact Us",
  },
  {
    id: 4,
    name: "Shop",
  },
  {
    id: 5,
    name: "Gallery",
  },
];
const services = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Blog",
  },
  {
    id: 3,
    name: "Contact Us",
  },
  {
    id: 4,
    name: "Shop",
  },
  {
    id: 5,
    name: "Gallery",
  },
];

export default Footer;
