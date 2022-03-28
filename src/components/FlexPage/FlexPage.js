import React from "react";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
const FlexPage = () => {
  return (
    <div className="w-full h-[100vh] bg-primary">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default FlexPage;
