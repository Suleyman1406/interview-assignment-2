import React from "react";

const Footer = ({ colorState }) => {
  return (
    <div className={"grid place-items-center  h-16 " + colorState.color}>
      <a
        href="https://dadashow.me/"
        target="_blank"
        className="text-xl text-black/50 hover:text-black/80 duration-150 grid "
        rel="noreferrer"
      >
        Designed & Built by
        <span className="    text-center text-sm">{"Suleyman  Dadashov"}</span>
      </a>
    </div>
  );
};

export default Footer;
