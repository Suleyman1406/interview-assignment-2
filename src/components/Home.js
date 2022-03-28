import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center text-center bg-home-back bg-cover">
      <div className="max-w-full w-fit mx-auto pb:16 sm:pb-36">
        <h1 className="text-2xl sm:text-4xl py-4">
          Hello, Welcome to <span className="text-tertiary">Alphastellar</span>{" "}
          Home Assessment
        </h1>
        <h2 className="text-lg sm:text-2xl italic opacity-80 pb-8">
          Click to see pages
        </h2>
        <div className="m-8 sm:12">
          <Link
            to="/flexpage"
            className="home-link block sm:inline-block text-xl font-semibold hover:shadow-2xl duration-500"
          >
            Flex Page
          </Link>
          <Link
            to="/gridpage"
            className="home-link block  sm:inline-block text-xl font-semibold  hover:shadow-2xl duration-500"
          >
            Grid Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
