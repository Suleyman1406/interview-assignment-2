import * as React from "react";
import { Routes, Route } from "react-router-dom";
import FlexPage from "./components/FlexPage/FlexPage";
import GridPage from "./components/GridPage/GridPage";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="m-0 p-0 box-border w-full h-[100vh] ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="flexpage" element={<FlexPage />} />
        <Route path="gridpage" element={<GridPage />} />
      </Routes>
    </div>
  );
};

export default App;
