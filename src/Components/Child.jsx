import React from "react";
import { useState } from "react";

const Child = ({ myName }) => {
  const [click, setClick] = useState(false);

  return (
    <div style={{ backgroundColor: click ? "yellow" : "white" }}>
      I am a Child {myName}{" "}
      <button
        onClick={(e) => {
          setClick(true);
        }}
      >
        Read
      </button>
    </div>
  );
};

export default Child;
