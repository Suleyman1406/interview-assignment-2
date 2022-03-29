import React from "react";
import Form from "./Form";

const Body = ({ colorState, errorState }) => {
  const changeColor = (color) => {
    colorState.setColor(color);
  };

  return (
    <div
      id="body"
      className="w-[100%]  lg:w-[78%] h-full  overflow-auto  bg-white/50 px-2 py-3 sm:py-4"
    >
      <div id="container" className="flex ">
        <div
          id="menuItems"
          className="hidden sm:flex sm:w-1/4 h-full   flex-col "
        >
          {[
            "bg-[#cbd5e1]",
            "bg-[#d6d3d1]",
            "bg-[#fde047]",
            "bg-[#bef264]",
            "bg-[#22d3ee]",
            "bg-[#e0f2fe]",
            "bg-[#e9d5ff]",
            "bg-[#f0abfc]",
            "bg-[#fecdd3]",
            "bg-[#a78bfa]",
          ].map((item, i) => (
            <div
              key={i}
              className={
                "w-[60%] py-3 my-2 shadow-md hover:shadow-xl cursor-pointer italic hover:translate-x-3 tracking-wide text-black/50 transition duration-300   mx-auto  " +
                (colorState.color === item
                  ? "translate-x-7 hover:translate-x-7"
                  : "") +
                " " +
                item
              }
              onClick={changeColor.bind(null, item)}
            >
              {item.substring(4, 11)}
            </div>
          ))}
        </div>
        <Form colorState={colorState} errorState={errorState} />
      </div>
    </div>
  );
};

export default Body;
