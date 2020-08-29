/* eslint-disable react/prop-types */
import React from "react";

const CodeBar = (props) => {
  const mapLines = () => {
    let rows = [];

    for (let i = 0; i <= props.rowAmount; i++) {
      rows.push(<p key={i}>{i}</p>);
    }
    return rows;
  };

  return (
    <div
      className="cb-root"
      style={{
        opacity: "0.3",
        fontSize: "0.7rem",
        height: "100%",
        width: "5%",
      }}
    >
      {mapLines()}
    </div>
  );
};

export default CodeBar;
