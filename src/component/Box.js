import React from "react";
import GrandSonBox from "./GrandSonBox";
import { useSelector } from "react-redux";

const Box = () => {
  let count = useSelector((state) => state.count);
  return (
    <div>
      This is Box{count}
      <GrandSonBox />
    </div>
  );
};

export default Box;
