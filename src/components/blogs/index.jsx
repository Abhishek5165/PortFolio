import React from "react";

import Section from "../shared/section/Section";
import leetcode from "../../images/blogs/leet.png";
import codeforces from "../../images/blogs/codeforces.jpg";
import codingNinja from "../../images/blogs/ninja.png";
import codeChef from "../../images/blogs/codechef.jpeg";
import BlogCard from "./blog-card";

import "./style.scss";

const Blogs = () => {
  return (
    <Section id="blogs" title="Coding Profiles" background="dark">
      <div className="blogs-content-wrapper">
        <BlogCard
          user="LeetCode"
          Links="https://leetcode.com/A_B_H_I_S_H_E_K_131/"
          image={leetcode}
          title="A_B_H_I_S_H_E_K_131"
          description="Problem Solved 500+
                    Highest Rating (1486)"
        />
        <BlogCard
          user="CodeForces"
          Links="https://codeforces.com/profile/Abhi1310"
          image={codeforces}
          title="Abhi1310"
          description="200+ Problems Solved
                    Pupil - Rating (1200)"
        />
        <BlogCard
          user="CodingNinja"
          Links="https://www.codingninjas.com/studio/profile/Abhishek_1320"
          image={codingNinja}
          title="Abhishek_1320"
          description="Problems Solved 200+
                    Level - Expert (1854)"
        />
        <BlogCard
          user="CodeChef"
          Links="https://www.codechef.com/users/abhishek_105"
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
