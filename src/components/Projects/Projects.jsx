import React, { useState } from "react";

import Section from "../shared/section/Section";
import Filters from "./filters";
import Showcase from "./showcase";
import Blogs from "../blogs";

import "./style.scss";

const projectsData = [
  {
    id: 1,
    name: "Blockbuster Buddy : Movie App",
    link: "https://private-eight-tau.vercel.app/",
    tags: ["web-app", "Other"],
    media: {
      thumbnail: require("../../images/portfolio/little.png"),
    },
  },
  {
    id: 2,
    name: "Personal : PortFolio",
    tags: ["web-page"],
    media: {
      thumbnail: require("../../images/portfolio/personal.png"),
    },
  },
  {
    id: 3,
    name: "Abhishek's-Gallery : Search & DownLoad",
    link: "https://abhisheks-gallery.vercel.app/",
    tags: ["web-page","web-app"],
    media: {
      thumbnail: require("../../images/portfolio/gallery.png"),
    },
  },
  {
    id: 4,
    name: "Something Different : Killer_Net",
    link: "https://killer-net-eight.vercel.app/",
    tags: ["web-app", "Other"],
    media: {
      thumbnail: require("../../images/portfolio/net_boy.png"),
    },
  },
  {
    id: 5,
    name: "E-Commerce Website : Abhishek's Amazon",
    tags: ["web-page"],
    media: {
      thumbnail: require("../../images/portfolio/amazon.png"),
    },
  },
  {
    id: 6,
    name: "PyGame : Space Invader",
    tags: ["product", "web-app", "Other"],
    link:"https://spark-13.itch.io/invader-game",
    media: {
      thumbnail: require("../../images/portfolio/space.avif"),
    },
  },
  {
    id: 7,
    name: "LimitLess",
    tags: ["web-app"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-6.jpg"),
    },
  },
  {
    id: 8,
    name: "Virtual Reality Experience",
    tags: ["web-app", "Other", "web-page"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-5.jpg"),
    },
  },
];

const Portfolio = () => {
  const [projects, setProjects] = useState(projectsData);
  const [transition, setTransition] = useState(false);

  const filterProjects = (tag) => {
    setTransition("zoomout");

    setTimeout(() => {
      if (tag !== "all") {
        const filteredProjects = projectsData.filter((f) =>
          f.tags.includes(tag)
        );
        setProjects(filteredProjects);
      } else {
        setProjects(projectsData);
      }
      setTransition("zoomin");
    }, 200);

    setTimeout(() => {
      setTransition(false);
    }, 600);
  };

  return (
    <Section id="portfolio" title="Check my Protfolio" background="light">
      <div className="portfolio-content-wrapper">
        <Filters filterProjects={(tag) => filterProjects(tag)} />
        <Showcase data={projects} transition={transition} />
        <Blogs />
      </div>
    </Section>
  );
};

export default Portfolio;
