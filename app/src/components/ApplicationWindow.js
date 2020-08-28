import React from "react";
import "../css/AWindow.css";
import StatusBar from "./StatusBar";
import Sidebar from "./Sidebar";

const ApplicationWindow = () => {
  return (
    <div className="aw_root">
      <StatusBar />
      <div className="middle">
        <Sidebar />
      </div>
    </div>
  );
};

export default ApplicationWindow;
