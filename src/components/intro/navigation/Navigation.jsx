import React from "react";
import "./style.scss";

import {CgMenuRight} from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

import { useState } from "react";
import logo from "./../../../images/logo.png";
import CallAction from "../../shared/call-action/CallAction";
import { scrollToSection } from "../../utils/helpers.js";

function Navigation() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const menuItemClickHandler = (section) => {
      setMobileMenu(!mobileMenu);
      scrollToSection(section);
  };

  return (
    <div className="top-navigation-bar">
      <div className="app-logo">
        <img className="logo" src={logo} alt="Loading ...." />
      </div>
      <div
                className="mobile-menu"
                onClick={() => setMobileMenu(!mobileMenu)}
            >
                {mobileMenu ? (
                    <IoMdClose
                        size={24}
                        color="#fff"
                    />
                ) : (
                    <CgMenuRight
                        size={24}
                        color="#fff"
                    />
                )}
            </div>
      
      <div className={`navigation ${mobileMenu ? "active" : ""}`}>
        <span
          className="navigation-item"
          onClick={() => menuItemClickHandler("about")}
        >
          About
        </span>
        <span
          className="navigation-item"
          onClick={() => menuItemClickHandler("skills")}
        >
          Skills
        </span>
        <span
          className="navigation-item"
          onClick={() => menuItemClickHandler("portfolio")}
        >
          Projects
        </span>
        <span
          className="navigation-item"
          onClick={() => menuItemClickHandler("blogs")}
        >
          Profiles
        </span>
        <CallAction
          text="Contact Me"
          action={() => menuItemClickHandler("contact")}
        />
      </div>
    </div>
  );
}

export default Navigation;
