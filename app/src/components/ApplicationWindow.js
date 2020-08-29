import React from "react";
import "../css/AWindow.css";
import StatusBar from "./StatusBar";
import Sidebar from "./Sidebar";
import FileWindow from "./FileWindow";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const ApplicationWindow = () => {
  const open = useSelector((state) => state.open);

  return (
    <motion.div
      className="aw_root"
      key={open}
      transition={{ ease: "easeIn", duration: 0.3 }}
      animate={{
        width: ["0vw", "85vw"],
        height: ["0vh", "80vh"],
      }}
    >
      <StatusBar />
      <div className="middle">
        <Sidebar />
        <FileWindow />
      </div>
    </motion.div>
  );
};

export default ApplicationWindow;
