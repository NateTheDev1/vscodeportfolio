import React from "react";
import CodeBar from "../CodeBar";
import "../../css/About.css";
import resume from "../../images/cur_resume.pdf";

const About = () => {
  return (
    <div className="ab-root">
      <CodeBar rowAmount={35} />
      <div className="ab-content">
        <h2>Nathaniel Richards</h2>
        <h3>Software Engineer</h3>

        <img src="https://pbs.twimg.com/profile_images/1287753863244783616/h4bkH9ds_400x400.jpg" />
        <p>
          I am more than a web developer. I am an engineer that is passionate
          about designing, developing, and shipping production quality
          technology. I strive to bring ideas to life, let me work with you and
          let us see what we can make! I am based out of Muskegon, Michigan and
          yes, it is cold. I have been programming and designing games, apps,
          and programs since I was 14 and have a strong passion to create high
          quality applications.
        </p>
        <a href={resume} alt="resume" className="resume">
          Resume
        </a>
      </div>
    </div>
  );
};

export default About;
