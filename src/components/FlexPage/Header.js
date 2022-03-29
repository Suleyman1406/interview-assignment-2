import React from "react";
import { Link } from "react-router-dom";

const Header = ({ colorState }) => {
  console.log(colorState.color);
  return (
    <div
      className={
        "w-full  h-12 text-black flex px-10  items-center italic font-semibold text-xl sm:text-2xl " +
        colorState.color
      }
    >
      <Link to="/">Alphastellar Assessment</Link>
    </div>
  );
};

export default Header;
