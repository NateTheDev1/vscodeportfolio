import React from "react";
import CodeBar from "../CodeBar";
import "../../css/Projects.css";

//https://gyazo.com/9675bebd442ae2b62aaf387370560403
const Projects = () => {
  return (
    <div className="pj-root">
      <CodeBar rowAmount={120} />
      <div className="pg-content">
        <h1>Professional Work</h1>
        <div className="project">
          <h2>BIGGBY COFFEE</h2>
          <div className="image-container">
            <img
              src="https://i.gyazo.com/bde4573ef15dd19e33f8905c05939f97.jpg"
              alt=""
            />
          </div>
          <h3>Overview</h3>
          <hr />
          <p>
            Working at BIGGBY COFFEE I work on all aspects of technology. From
            ecommerce web projects, to the point of sale systems used by
            hundreds of stores across the United States everyday. In these
            projects I have worked on the server side, the frontend, quality
            assurance, and more. More information is available upon request.
          </p>

          <h3>Technologies</h3>
          <hr />
          <p>
            React, Apollo Client, Apollo Server, MySQL, Express, Node,
            Typescript, Bootstrap, Stripe, C++, QTCreator
          </p>
          <div className="links">
            <a href="https://biggby.com" target="__blank">
              BIGGBY Home Site
            </a>
          </div>
        </div>
        <div className="project">
          <h2>Untangled Cables (Freelance) </h2>
          <div className="image-container">
            <img
              src="https://i.gyazo.com/33af81377252c4440803c7ea75b4e536.png"
              alt=""
            />
          </div>
          <h3>Overview</h3>
          <hr />
          <p>
            An online shop built for a client selling mouse and keyboard cables.
            It uses stripe for customer data and payments. It also has a fully
            functioning CMS and Admin Dashboard.
          </p>

          <h3>Technologies</h3>
          <hr />
          <p>
            React, Apollo Client, Apollo Server, MySQL, Express, Node,
            Typescript, Material-UI, CSS, Stripe
          </p>
          <div className="links">
            <a href="https://untangledcables.com" target="__blank">
              Live Demo
            </a>
          </div>
        </div>
        <h1>Packages</h1>
        <div className="project">
          <h2>bootcamp-ui</h2>
          <hr />
          <p>
            Bootcamp-UI is a prototyping based component library made for easy
            and quick UI development in React. Made for bootcamp students by a
            bootcamp student. I became a team leader at my school and to help
            the group of students I managed, I created a component library to
            help them while they were just starting out in React to easily
            create good looking UI.
          </p>
          <h3>Technologies</h3>
          <hr />
          <p>Styled Components, Styleguidist, CSS, React</p>
          <div className="links">
            <a
              href="https://github.com/NateTheDev1/bootcamp-ui"
              target="__blank"
            >
              GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/bootcamp-ui"
              target="__blank"
            >
              NPM
            </a>
          </div>
        </div>
        <div className="project">
          <h2>knex-db-access</h2>
          <hr />
          <p>An easy way to access your SQL database without queries</p>
          <h3>Technologies</h3>
          <hr />
          <p>NodeJS, JavaScript, Knex</p>
          <div className="links">
            <a
              href="https://github.com/NateTheDev1/knex-db-access"
              target="__blank"
            >
              GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/knex-db-access"
              target="__blank"
            >
              NPM
            </a>
          </div>
        </div>
        <h1>Projects</h1>
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
        <div className="project">
          <h2>QuickNote</h2>
          <div className="image-container">
            <img
              src="https://i.gyazo.com/de8900b4bb8fe6585202aa9a80eb19b4.png"
              alt="Tweeter"
            />
          </div>
          <h3>Overview</h3>
          <hr />
          <p>
            QuickNote is a quick and easy solution to the many note taking
            applications you are currently signed up for. Here you just need to
            sign up, login and start creating simple notes to display on your
            board.
          </p>

          <h3>Technologies</h3>
          <hr />
          <p>Backend Stack: Bcrypt, JWT, Express, MongoDB, Mongoose </p>
          <p>Frontend Stack: React, MaterialUI, Redux</p>
          <div className="links">
            <a
              href="https://github.com/NateTheDev1/quick-note-app"
              target="__blank"
            >
              GitHub
            </a>
            <a href="https://quick-note.vercel.app/" target="__blank">
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
