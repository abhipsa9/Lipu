import { useState } from "react";
import React from "react";
import "./styles.css";

const MyToggleColor = () => {
  const [toggle, setToggle] = useState("red");
  const toggleButton = () => {
    toggle === "red"
      ? setToggle("blue")
      : toggle === "blue"
      ? setToggle("green")
      : setToggle("red");
  };

  return (
    <div>
      <div style={{ backgroundColor: `${toggle}` }}>Change My Color</div>
      <button onClick={toggleButton}>Click Me</button>
    </div>
  );
};

export default MyToggleColor;
