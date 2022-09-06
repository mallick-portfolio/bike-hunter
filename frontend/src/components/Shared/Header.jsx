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
              <li className="common-btn">
                <button onClick={() => signOut(auth)}>Sign Out</button>
              </li>
            ) : (
              <li>
                <Link className="common-btn" to={"/login"}>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className="flex lg:hidden">
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
              <h1 className="text-2xl font-medium text-primary">
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
export default Header;
