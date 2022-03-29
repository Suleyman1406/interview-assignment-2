import React from "react";
import Body from "./Body";
import Sidebar from "./Sidebar";

const Content = ({ colorState }) => {
  return (
    <div className="h-[calc(100%-112px)] transition-all flex text-center text-black bg-body-back bg-cover px-5 py-7">
      <Body colorState={colorState} />
      <Sidebar />
    </div>
  );
};

export default Content;
