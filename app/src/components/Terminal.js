import React from "react";
import Terminal from "terminal-in-react";
import { useDispatch } from "react-redux";
import { closeTerminal } from "../services/actions";
import { motion } from "framer-motion";

const TWindow = () => {
  const dispatch = useDispatch();

  return (
    <motion.div
      transition={{ ease: "easeIn", duration: 0.3 }}
      animate={{
        width: ["0vw", "85vw"],
        height: ["0vh", "80vh"],
        opacity: [0, 1],
      }}
      style={{
        position: "fixed",

        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Terminal
        actionHandlers={{ handleClose: () => dispatch(closeTerminal()) }}
        style={{
          position: "fixed",
          top: "50%",
          width: "80vw",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "1.2rem",
          fontWeight: 700,
        }}
        backgroundColor="black"
        barColor="#F8F8F8"
        commands={{
          showmsg: () => console.log("hello"),
          blog: () => "https://medium.com/@NateTheWebDev",
          angular: () => "Oh boy....we won't talk about this",
          javascriptninja: () =>
            "83VFHW3JD - Message me this code on any social media and I will congratulate you for finding this!",
        }}
        descriptions={{
          show: false,
          showmsg: "shows a message",
          blog: "reveals my blog link",
          angular: "What do I Think?",
          javascriptninja: false,
        }}
        msg="You have found my terminal..."
      />
    </motion.div>
  );
};

export default TWindow;
