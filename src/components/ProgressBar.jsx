import React from "react";

const ProgressBar = ({ completed }) => {
  const progressStyles = {
    width: "80%",
    height: 15,
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 30,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: "#FFEC65",
    borderRadius: "inherit",
    textAlign: "right",
    position: "relative",
  };

  const labelStyles = {
    position: "absolute",
    left: "100px",
    top: "-8px",
    fontSize: "16px",
    color: "black",
    fontWeight: "bold",
  };

  return (
    <div style={progressStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
