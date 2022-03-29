import React from "react";
import { Link } from "react-router-dom";

const Header = ({ colorState }) => {
  return (
    <div
      className={
        "w-full  h-12 text-black grid px-10  italic font-semibold text-xl sm:text-2xl " +
        colorState.color
      }
    >
      <Link to="/" className="my-auto">
        Alphastellar Assessment
      </Link>
    </div>
  );
};

export default Header;
