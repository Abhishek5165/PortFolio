import React from "react";

import Section from "../shared/section/Section";
import leetcode from "../../images/blogs/leetcode.png";
import codeforces from "../../images/blogs/codeforces.jpg";
import codingNinja from "../../images/blogs/CodingNinja.png";
import codeChef from "../../images/blogs/codechef.jpeg";
import BlogCard from "./blog-card";

import "./style.scss";

const Blogs = () => {
  return (
    <Section id="blogs" title="Coding Profiles" background="dark">
      <div className="blogs-content-wrapper">
        <BlogCard
          user="LeetCode"
          image={leetcode}
          title="A_B_H_I_S_H_E_K_131"
          description="Problem Solved 500+
                    Highest Rating (1486)"
        />
        <BlogCard
          user="CodeForces"
          image={codeforces}
          title="Abhi1310"
          description="200+ Problems Solved
                    Pupil - Rating (1200)"
        />
        <BlogCard
          user="CodingNinja"
          image={codingNinja}
          title="Abhishek_1320"
          description="Problems Solved 200+
                    Level - Expert (1854)"
        />
        <BlogCard
          user="CodeChef"
          image={codeChef}
          title="decoder_boy_13"
          description="200+ Problems Solved
                    2 ⭐ at CodeChef"
        />
      </div>
    </Section>
  );
};

export default Blogs;
