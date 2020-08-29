import React from "react";
import "../css/HomeScreen.css";
import appleLogo from "../images/apple-logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { openCoder } from "../services/actions";

import vsIcon from "../images/vcode-ico.svg";

const HomeScreen = () => {
  const open = useSelector((state) => state.open);
  const dispatch = useDispatch();

  return (
    <div className="hs-root">
      <div className="toolbar">
        <img src={appleLogo} alt="apple logo" />
        <p className="title">{open ? "Visual Studio Code" : "Mac"}</p>
        <p>File</p>
        <p>Edit</p>
        <p>Documents</p>
        <p>Settings</p>
        <p>Format</p>
        <p>Help</p>
        <p>Window</p>
      </div>
      <div className="app-menu">
        <button
          className="app-btn"
          disabled={open}
          onClick={() => dispatch(openCoder())}
        >
          <img src={vsIcon} alt="portfolio" />
          <span className="app-btn-title">Portfolio Code</span>
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
