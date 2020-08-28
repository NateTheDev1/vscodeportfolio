import React from "react";
import "../css/FileWindow.css";
import mdIcon from "../images/markdown_ico.svg";
import htmlIcon from "../images/html_ico.svg";
import cssIcon from "../images/css_ico.svg";
import { useSelector, useDispatch } from "react-redux";
import { updatePage } from "../services/actions";

const FileWindow = () => {
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();

  const handleChange = (newPage) => {
    dispatch(updatePage(newPage));
  };

  return (
    <div className="fw-root">
      <div className="fw-toolbar">
        <button
          className={`fw-header ${page === "about.md" && "active"}`}
          onClick={() => handleChange("about.md")}
        >
          <img src={mdIcon} alt="markdown" />
          <p>about.md</p>
        </button>
        <button
          className={`fw-header ${page === "projects.html" && "active"}`}
          onClick={() => handleChange("projects.html")}
        >
          <img src={htmlIcon} alt="html" />
          <p>projects.html</p>
        </button>
        <button
          className={`fw-header ${page === "contact.css" && "active"}`}
          onClick={() => handleChange("contact.css")}
        >
          <img src={cssIcon} alt="css" />
          <p>contact.css</p>
        </button>
      </div>
      <div className="fw-content"></div>
    </div>
  );
};

export default FileWindow;
