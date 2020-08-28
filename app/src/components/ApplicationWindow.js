import React from "react";
import "../css/AWindow.css";
import StatusBar from "./StatusBar";
import Sidebar from "./Sidebar";
import FileWindow from "./FileWindow";

const ApplicationWindow = () => {
  return (
    <div className="aw_root">
      <StatusBar />
      <div className="middle">
        <Sidebar />
        <FileWindow />
      </div>
    </div>
  );
};

export default ApplicationWindow;
