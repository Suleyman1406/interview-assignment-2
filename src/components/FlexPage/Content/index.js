import React from "react";
import { useState } from "react";
import Body from "./Body";
import Error from "./Error";
import Sidebar from "./Sidebar";

const Content = ({ colorState }) => {
  const [error, setError] = useState("");
  const errorState = {
    error,
    setError,
  };
  return (
    <div className="h-[calc(100%-112px)] transition-all flex text-center text-black bg-body-back bg-cover px-5 py-7">
      <Error errorState={errorState} />
      <Body colorState={colorState} errorState={errorState} />
      <Sidebar />
    </div>
  );
};

export default Content;
