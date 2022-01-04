import React from "react";
import Header from "./app/header";
import Footer from "./app/footer";
const Base = ({ children, title }) => {
  return (
    <div className="">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Base;
