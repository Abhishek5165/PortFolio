import React from "react";

import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

import Section from "../shared/section/Section";
import Logo from "../../images/logo.png";
import SocialIcon from "./social-icons";
import { scrollToSection } from "../utils/helpers.js";

import "./style.scss";

const Footer = () => {
  return (
    <Section background="dark" className="footer">
      <div className="footer-content-wrapper">
        <div className="footer-logo">
          <img src={Logo} alt="Abhishek Loading..." />
        </div>
        <ul className="footer-menu-items">
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("about")}
          >
            About
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("portfolio")}
          >
            Portfolio
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("blogs")}
          >
            profiles
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("contact")}
          >
            Contact me
          </li>
        </ul>
        <div className="social-icons">
          <SocialIcon
            color="#1DA1F2"
            icon={<FaTwitter />}
            link="https://twitter.com/Abhishek_13107"
          />
          <SocialIcon
            color="#0D2636"
            icon={<FaGithub />}
            link="https://github.com/Abhishek5165"
          />
          <SocialIcon
            color="#0A66C2"
            icon={<FaLinkedinIn />}
            link="https://www.linkedin.com/in/abhishek-verma-600899247/"
          />
          <SocialIcon
            color="#E84C88"
            icon={<FaInstagram />}
            link="https://www.instagram.com/abhishek_v13/"
          />
        </div>
        <div className="bottom-bar">
          <div className="copyright-text">
            Copyright &copy; 2024 Abhishek Verma ! | All Rights Reserved
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
