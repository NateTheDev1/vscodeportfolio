import React from "react";
import CodeBar from "../CodeBar";
import "../../css/Projects.css";

const Projects = () => {
  return (
    <div className="pj-root">
      <CodeBar rowAmount={150} />
      <div className="pg-content">
        <div className="project">
          <h2>Morning Roast Coffee</h2>
          <div className="image-container">
            <img
              src="https://i.gyazo.com/29283e412b4d2e63c0e7a02d9dd7dcd1.jpg"
              alt=""
            />
          </div>
          <h3>Overview</h3>
          <hr />
          <p>
            Morning Roast is a full stack coffee Ordering app built in 4 days,
            with a well oiled mobile design, I have integrated Stripe payments
            as well as order history.
          </p>

          <h3>Technologies</h3>
          <hr />
          <p>
            React, Apollo Client, Apollo Server, Postgres, Express, Node,
            Typescript, Material-UI, CSS, Stripe
          </p>
          <div className="links">
            <a
              href="https://github.com/NateTheDev1/morningroast-client"
              target="__blank"
            >
              GitHub
            </a>
            <a href="https://morningroast.vercel.app/" target="__blank">
              Live Demo
            </a>
          </div>
        </div>
        <div className="project">
          <h2>Tweeter</h2>
          <div className="image-container">
            <img
              src="https://i.gyazo.com/c87000af61a9863bec2d2e3e5da3d1eb.png"
              alt="Tweeter"
            />
          </div>
          <h3>Overview</h3>
          <hr />
          <p>
            Tweeter is a clone of the popular app Twitter. I tried to make it a
            clone as well as my own. I added a statistic feature as well as
            posts, retweets, profiles and more.
          </p>

          <h3>Technologies</h3>
          <hr />
          <p>React, Styled Components, Node, MongoDB, ANTD, Cloudinary</p>
          <div className="links">
            <a
              href="https://github.com/NateTheDev1/tweeter-app"
              target="__blank"
            >
              GitHub
            </a>
            <a href="https://tweeter-app.vercel.app/" target="__blank">
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
