import React from "react";
import CodeBar from "../CodeBar";
import "../../css/Skills.css";

const Skills = () => {
  return (
    <div className="sk-root">
      <CodeBar rowAmount={80} />
      <div className="sk-content">
        <p>
          {" "}
          <span className="purp">import</span> React{" "}
          <span className="purp">from</span>{" "}
          <span className="green">{`"react"`}</span>;
        </p>
        <p>
          {" "}
          <span className="purp">import</span> SoftwareEngineer{" "}
          <span className="purp">from</span>{" "}
          <span className="green">{`"nathaniel-richards"`}</span>;
        </p>
        <div className="component" style={{ marginTop: "10%" }}>
          <p>
            <span className="purp">const</span>{" "}
            <span className="blu">Skills = </span>
            <span className="orange">()</span>
            <span className="purp">{` =>`} </span>
            <span className="orange">SoftwareEngineer.Create()</span>
            <span className="purp">{` =>`} </span>
            <span className="bracket">{` {`}</span>
          </p>
          <p style={{ paddingLeft: "3%" }}>
            <span className="purp">return</span>
            <span className="orange"> (</span>
          </p>
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`<h1>`} </span> CORE SKILLS{" "}
            <span className="red">{`</h1>`}</span>
          </p>
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`<p>`}</span>
          </p>
          <ul style={{ paddingLeft: "20%" }}>
            <li>Typescript</li>
            <li>JavaScript</li>
            <li>NodeJS</li>
            <li>Git And Repo Management</li>
            <li>HTML, CSS</li>
            <li>PostgreSQL, MySQL, SQLite3</li>
            <li>SCSS, SASS, LESS</li>
            <li>C++, QT Creator (Desktop Applications)</li>
            <li>Rust</li>
            <li>C#</li>
            <li>Unreal Engine, Unity Engine</li>
          </ul>
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`</p>`}</span>
          </p>
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`<h1>`} </span> FRONTEND TECHNOLOGIES{" "}
            <span className="red">{`</h1>`}</span>
          </p>
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`<p>`}</span>
          </p>
          <ul style={{ paddingLeft: "20%" }}>
            <li>ReactJS</li>
            <li>Redux</li>
            <li>Context</li>
            <li>RecoilJS</li>
            <li>React Native</li>
            <li>MaterialUI</li>
            <li>Bootstrap & Reactstrap</li>
            <li>Materialize</li>
            <li>Styled-Components</li>
            <li>Apollo Client</li>
            <li>Electron</li>
            <li>QML</li>
          </ul>
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`</p>`}</span>
          </p>
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`<h1>`} </span> BACKEND TECHNOLOGIES{" "}
            <span className="red">{`</h1>`}</span>
          </p>
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`<p>`}</span>
          </p>
          <ul style={{ paddingLeft: "20%" }}>
            <li>NodeJS</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>SQLite</li>
            <li>MySQL</li>
            <li>GraphQL</li>
            <li>Apollo Server</li>
            <li>MongoDB</li>
            <li>PocketDB</li>
            <li>Firebase</li>
          </ul>
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`</p>`}</span>
          </p>
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`<h1>`} </span> TESTING{" "}
            <span className="red">{`</h1>`}</span>
          </p>
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`<p>`}</span>
          </p>
          <ul style={{ paddingLeft: "20%" }}>
            <li>Cypress.io</li>
            <li>Jest</li>
            <li>supertest</li>
            <li>Enzyme</li>
            <li>apollo-server-testing</li>
          </ul>
          <p style={{ paddingLeft: "8%" }}>
            <span className="red">{`</p>`}</span>
          </p>
          <span className="orange"> )</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
