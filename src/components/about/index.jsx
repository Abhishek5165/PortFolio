import React from "react";
import "./style.scss";
import Section from "../shared/section/Section";
import skillImage from "../../images/abhi.jpg";
import { MdImportantDevices } from "react-icons/md";
import CallAction from "../shared/call-action/CallAction";
import { AiOutlineCloudDownload } from "react-icons/ai";

const About = () => {
  return (
    <div>
      <Section background="dark" id="about">
        <div className="skills-content-wrappers">
          <div className="left-col">
            <img src={skillImage} alt="Loading.." />
          </div>

          <div className="right-col">
            <div className="titles">About Me</div>
            <p>
              <MdImportantDevices /> Hey everyone, my name is Abhishek Verma. I'm currently a 3rd year Btech undergraduate student at IIIT-Bhagalpur. In addition to my studies, I'm also a front-end developer and I'm eager to expand my skills to become a full-stack developer.
              <br />
              <br />
              <MdImportantDevices /> Proficient in HTML, CSS, JavaScript and
              React JS for building responsive and interactive user interfaces.
              <br />
              <br />
              <MdImportantDevices /> Strong analytical and problem-solving
              skills to address technical challenges. Ability to innovate and
              propose creative engineering solutions.
              <br />
              <br /> <MdImportantDevices /> Understanding of server-side
              languages such as Node.js, Python, or PHP, Proficiency in database
              management systems like MySQL, MongoDB.
              <br />
              <br />
              <MdImportantDevices /> Strong understanding of fundamental data
              structures such as arrays, linked lists, stacks, queues, trees,
              graphs, DP.
            </p>
            <CallAction text="Download CV" icon={<AiOutlineCloudDownload />} />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
