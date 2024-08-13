import React from "react";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import "./style.scss";

const ContactInfo = () => {
  return (
    <div className="contact-info-box">
      <h4>
        Feel free to ask about website design , Coding or any other topics
        you're curious about — feel free to inquire, and I'll do my best to assist
        you!
      </h4>
      <div className="contact-option">
        <FaPhoneAlt />
        <span className="text">+91 8707814022</span>
      </div>
      <div className="contact-option">
        <MdEmail />
        <span className="text">abhishek1000verma@gmail.com</span>
      </div>
    </div>
  );
};

export default ContactInfo;
