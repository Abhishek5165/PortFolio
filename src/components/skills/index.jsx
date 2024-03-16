import React from "react";
import "./style.scss";
import Section from "../shared/section/Section";

const Skills = () => {

  function getTextForIndex(index) {
    const texts = [
      "C/C++",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Java Script",
      "React Js",
      "Node Js",
      "MongoDB",
      "PHP",
      "MySql",
      "Python",
      "Git/Github"
    ];
  
    return texts[index];
  }
  
  return (
    <div>
      <Section background="dark" id="skills">
          <h2 className="skill">Skills</h2>
        <div className="skills-content-wrapper">
          <div className="grid-container">
            {Array.from({ length: 12 }, (_, index) => (
              <div key={index} className="grid-item">
                 &#9989; {getTextForIndex(index)}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Skills;
