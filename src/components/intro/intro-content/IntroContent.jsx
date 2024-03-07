import React from "react";
import handIcon from "../../../images/hand.png";
import CallAction from "../../shared/call-action/CallAction";
import image from "../../../images/img.svg";
import { FaUser } from "react-icons/fa";
import { scrollToSection } from "../../utils/helpers.js";

import "./style.scss";

const IntroContent = () => {
  return (

    <div className="intro-content">
      <div className="layout">
        <div className="left-col">
          <h1 className="title">
            <span className="small-text">
              <span className="text">Hello</span>
              <span className="icon">
                <img src={handIcon} />
              </span>
              <span className="text">, I Am</span>
            </span>
            <span className="big-text">Abhishek Verma</span>
          </h1>
          <p>
            A passionate web developer from India. I am currently pursuing my
            B.Tech from Indian Institute of Information Technology Bhagalpur
            Bihar.🤝I love to work in groups where everyone can voice
            their opinions and ideas.
          </p>
          <CallAction
            text="Get in Touch"
            action={() => scrollToSection("contact")}
          />
        </div>
        <div className="right-col">
          <img src={image} alt="Loading...." />

          <div className="highlights verticle">
            <div className="icon">
              <FaUser />
            </div>
            <div className="text">
              <span>Passionate</span>
              Web Developer !
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroContent;
