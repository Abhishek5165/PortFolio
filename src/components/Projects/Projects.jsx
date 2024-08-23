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
    tags: ["web-app", "Other"],
    link:"https://github.com/Abhishek5165/Private",
    media: {
      thumbnail: require("../../images/portfolio/little.png"),
    },
  },
  {
    id: 2,
    name: "NetFlix Clone : Killer",
    link:"https://killer-o1qb7dl80-abhisheks-projects-c4910510.vercel.app/",
    tags: ["web-page"],
    media: {
      thumbnail: require("../../images/portfolio/net_boy.png"),
    },
  },
  {
    id: 3,
    name: "Abhishek's-Gallery : Search & DownLoad",
    link: "https://abhisheks-gallery.vercel.app/",
    tags: ["web-page"],
    media: {
      thumbnail: require("../../images/portfolio/gallery.png"),
    },
  },
  {
    id: 4,
    name: "MarketHive - An Amazon Preview",
    link:"https://market-hive.vercel.app/",
    tags: ["web-page","web-app"],
    media: {
      thumbnail: require("../../images/portfolio/amazon.png"),
    },
  },
  {
    id: 5,
    name: "E-Commerce Website : Trendsetter Threads",
    link: "https://github.com/Abhishek5165/Abhisheks_Shopping_Cart",
    tags: ["web-page","Other"],
    media: {
      thumbnail: require("../../images/portfolio/A1.png"),
    },
  },
  {
    id: 6,
    name: "PyGame : Space Invader",
    link:"https://spark-13.itch.io/invader-game",
    tags: [ "web-app", "Other"],
    media: {
      thumbnail: require("../../images/portfolio/space.avif"),
    },
  },
  {
    id: 7,
    name: "CRUD App",
    link:"https://crud1310.infinityfreeapp.com/",
    tags: ["web-app"],
    media: {
      thumbnail: require("../../images/portfolio/D1.png"),
    },
  },
  {
    id: 8,
    name: "Coder Quest : An E-Learning Website",
    link:"https://github.com/Abhishek5165/Coder-Quest",
    tags: ["web-page"],
    media: {
      thumbnail: require("../../images/portfolio/E-learn.png"),
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
    <Section id="portfolio" title="Check my Projects" background="light">
      <div className="portfolio-content-wrapper">
        <Filters filterProjects={(tag) => filterProjects(tag)} />
        <Showcase data={projects} transition={transition} />
        <Blogs />
      </div>
    </Section>
  );
};

export default Portfolio;
