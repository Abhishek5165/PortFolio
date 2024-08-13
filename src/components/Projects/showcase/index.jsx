import React from "react";

import Arrow from "../../shared/arrow";

import "./style.scss";

const Showcase = ({ data, transition}) => {
  return (
    <div className="projects-showcase">
      {data.map((project) => (
        <div
          key={project.name}
          className={`showcase-item ${
            transition === "zoomout"
              ? "zoomOut"
              : transition === "zoomin"
              ? "zoomIn"
              : ""
          }`}
        >
          <div className="meta-content">
            <h3
              onClick={() => {
                window.open(project.link, "_blank");
              }}
            >
              {project.name}
            </h3>
            <div
              className="go-to-cta"
              onClick={() => {
                window.open(project.link, "_blank");
              }}
            >
              <span className="text">Project Details</span>
              <Arrow />
            </div>
          </div>
          <img
            onClick={() => {
              window.open(project.link, "_blank");
            }}
            src={project.media.thumbnail}
          />
        </div>
      ))}
    </div>
  );
};

export default Showcase;
