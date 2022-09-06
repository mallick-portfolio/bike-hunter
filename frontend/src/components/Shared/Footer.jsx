import React from "react";
import { Link } from "react-router-dom";
import FooterCard from "./FooterCard.jsx";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="container py-24 lg:py-28 border-t border-primary grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div>
        <h3 className="text-2xl font-medium text-primary">
          <Link to="/">
            Bike <span className="text-bodyWhite cursor-pointer">Hunter</span>
          </Link>
        </h3>
        <p className="text-base py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta impedit
          neque
        </p>
        <ul className="flex items-center gap-4">
          <li className="social-icon">
            <FaFacebookF className="text-2xl" />
          </li>
          <li className="social-icon">
            <FaTwitter className="text-2xl" />
          </li>
          <li className="social-icon">
            <FaLinkedinIn className="text-2xl" />
          </li>
        </ul>
      </div>
      <FooterCard items={aboutLink} title="About Bike Hunter" />
      <FooterCard items={generalLink} title="general Link" />
      <FooterCard items={services} title="Our Services" />
    </div>
  );
};

const aboutLink = [
  {
    id: 1,
    name: "About Us",
  },
  {
    id: 2,
    name: "Become A Dealer",
  },
  {
    id: 3,
    name: "CheckOut",
  },
  {
    id: 4,
    name: "Cart",
  },
];
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
