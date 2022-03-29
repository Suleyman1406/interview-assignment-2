import React from "react";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
const GridPage = () => {
  const [selectedColor, setSelectedColor] = useState("bg-[#cbd5e1]");
  var colorState = {
    color: selectedColor,
    setColor: setSelectedColor,
  };
  return (
    <div className="w-full h-[100vh] min-w-fit max-h-fit">
      <Header colorState={colorState} />
      <Content colorState={colorState} />
      <Footer colorState={colorState} />
    </div>
  );
};

export default GridPage;
