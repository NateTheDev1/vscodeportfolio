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

        <img src="https://media.licdn.com/dms/image/C5603AQGgOQczP1qPfA/profile-displayphoto-shrink_800_800/0/1660347472189?e=1683158400&v=beta&t=h1_P5_TBncnnedY4iV_hDRGgo8Fy2ZZu-bPqg7uy-jw" />
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
