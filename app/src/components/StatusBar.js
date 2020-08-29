import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeCoder } from "../services/actions";

const StatusBar = () => {
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();

  return (
    <div className="status-bar">
      <div className="status-bar-inner">
        <div className="icons">
          <div
            className="icon"
            style={{ background: "#ED594A" }}
            onClick={() => dispatch(closeCoder())}
          ></div>
          <div className="icon" style={{ background: "#FDD800" }}></div>
          <div className="icon" style={{ background: "#5AC05A" }}></div>
        </div>
        <p className="status-text">{page} - nathaniel-richards</p>
      </div>
    </div>
  );
};

export default StatusBar;
