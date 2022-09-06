import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="container flex justify-between items-center py-8">
      <div>Bike Hunter</div>
      <div className="flex items-center gap-8">
        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-6">
            {menus.map((item) => (
              <li
                key={item.id}
                className="text-base font-medium text-bodyWhite cursor-pointer"
              >
                <Link to={item.route}>{item.display}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-6">
            <li className="common-btn">Login</li>
            <li className="common-btn">Sign Up</li>
          </ul>
        </div>
        <div className="flex lg:hidden">
          <button onClick={() => setShow(!show)}>
            <AiOutlineMenu className="text-3xl text-primary" />
          </button>
        </div>

        <div
          onClick={() => setShow(!show)}
          className={`flex z-40  lg:hidden w-screen min-h-screen fixed duration-500 transition-all ${
            show
              ? "top-0 left-0 bg-menu"
              : "top-0 -left-[1000px] bg-transparent"
          }`}
        >
          <div className=" relative z-50 items-start w-64 pl-8 pt-8 shadow-menu bg-[#e9eef1]">
            <div className="flex justify-between items-center pr-6">
              <h1>Bike Hunter</h1>
              <button onClick={() => setShow(!show)}>
                <FontAwesomeIcon
                  className="text-primary text-2xl px-4 py-2 bg-btn hover:bg-btnHover hover:transition-all hover:duration-500 hover:text-white rounded-full"
                  icon={faXmark}
                />
              </button>
            </div>
            <ul className="flex flex-col pt-4 gap-3">
              {menus.map((item) => (
                <li
                  key={item.id}
                  className="text-base font-medium text-bodyWhite cursor-pointer"
                >
                  <Link to={item.route}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const menus = [
  {
    id: 1,
    display: "Home",
    route: "/",
  },
  {
    id: 2,
    display: "Shop",
    route: "/shop",
  },
  {
    id: 3,
    display: "About",
    route: "/about",
  },
  {
    id: 4,
    display: "Gallery",
    route: "/gallery",
  },
  {
    id: 5,
    display: "Blog",
    route: "/blog",
  },
  {
    id: 6,
    display: "Contact",
    route: "/contact",
  },
];
export default Header;
