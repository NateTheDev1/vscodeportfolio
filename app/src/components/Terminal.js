import React from "react";
import Terminal from "terminal-in-react";
import { useDispatch } from "react-redux";
import { closeTerminal } from "../services/actions";

const TWindow = () => {
  const dispatch = useDispatch();

  return (
    <div
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
        }}
        descriptions={{
          show: false,
          showmsg: "shows a message",
        }}
        msg="You have found my terminal..."
      />
    </div>
  );
};

export default TWindow;
