import React from "react";
import Arrow from "../../shared/arrow";

import "./style.scss";

const BlogCard = ({ user, date, image, title, description, Links }) => {
  return (
    <div className="blog-card">
      <div className="image-section">
        <img src={image} alt={title} />
      </div>
      <div className="content-section">
        <div className="info-bar">
          <div className="user-name"> {user}</div>
          <div className="posted-date">{date}</div>
        </div>
        <h3
          onClick={() => {
            window.open(Links, "_blank");
          }}
        >
          {title}
        </h3>
        <p>{description}</p>
        <div className="readmore-cta">
          <span
            className="text"
            onClick={() => {
              window.open(Links, "_blank");
            }}
          >
            Read More
          </span>
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
