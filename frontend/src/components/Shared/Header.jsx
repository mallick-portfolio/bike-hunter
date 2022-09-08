import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.js";
import { signOut } from "firebase/auth";
import Loading from "./Loading.jsx";
const Header = () => {
  const [user, loading] = useAuthState(auth);
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="header-container">
      <div>
        <h1 className="text-2xl font-medium text-primary">
          <Link to="/">
            Bike <span className="text-bodyWhite cursor-pointer">Hunter</span>
          </Link>
        </h1>
      </div>
      <div className="menu">
        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="desktop-ul">
            {menus.map((item) => (
              <li key={item.id}>
                <Link className="nav-item" to={item.route}>
                  {item.display}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-6">
            {user?.email ? (
              <>
                <li onClick={() => setActive(!active)} className="relative">
                  <img
                    className="userImage"
                    src={
                      user?.photoURL
                        ? user?.photoURL
                        : "https://placeimg.com/192/192/people"
                    }
                    alt=""
                  />
                  <div
                    className={`absolute ${
                      active ? "top-16 right-0" : "-top-96 right-0"
                    } dropdown-menu`}
                  >
                    {items}
                  </div>
                </li>
              </>
            ) : (
              <li>
                <Link className="common-btn" to={"/login"}>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className="flex items-center gap-4 lg:hidden">
          <div className="relative">
            <button onClick={() => setActive(!active)}>
              <img
                className="userImage"
                src={
                  user?.photoURL
                    ? user?.photoURL
                    : "https://placeimg.com/192/192/people"
                }
                alt=""
              />
            </button>
            <div
              className={`absolute ${
                active ? "top-16 right-0" : "-top-96 right-0"
              } dropdown-menu`}
            >
              {items}
            </div>
          </div>
          <button onClick={() => setShow(!show)}>
            <FontAwesomeIcon className="xicon" icon={faBars} />
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          className={`mobile-menu ${
            show
              ? "top-0 left-0 bg-menu"
              : "top-0 -left-[1000px] bg-transparent"
          }`}
        >
          <div className="menu-head">
            <div className="mobile-logo-area">
              <h1 className="text-2xl font-bold text-primary">
                <Link to="/">
                  Bike{" "}
                  <span className="text-bodyWhite cursor-pointer">Hunter</span>
                </Link>
              </h1>
              <button onClick={() => setShow(!show)}>
                <FontAwesomeIcon className="xicon" icon={faXmark} />
              </button>
            </div>
            <ul className="mobile-menu-ul">
              {menus.map((item) => (
                <li key={item.id}>
                  <Link className="mobile-nav-item" to={item.route}>
                    {item.display}
                  </Link>
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
const items = (
  <>
    <ul className="flex flex-col gap-1">
      <li className="dropdown-menu-item">Dashboard</li>
      <li className="dropdown-menu-item">Users</li>
      <li className="dropdown-menu-item">Orders</li>
      <li className="dropdown-menu-item">Add Product</li>
      <li className="dropdown-menu-item">Manage Product</li>
      <li className="common-btn mt-3">
        <button onClick={() => signOut(auth)}>Sign Out</button>
      </li>
    </ul>
  </>
);
export default Header;
