import React from "react";
import Child from "./Child";

function Parent() {
  return (
    <div>
      <span> I am a Parent</span>
      <Child myName={"Prasad"} />
      <Child myName={"Sonu"} />
      <Child myName={"Nilesh"} />
    </div>
  );
}
export default Parent;
