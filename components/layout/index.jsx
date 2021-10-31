import React from "react";
import Navbar from "./Navbar";
import Spacing from "../Spacing";

const Layout = ({ children }) => {
  return (
    <div className="h-full mx-auto max-w-screen-2xl">
      <div className="px-4 md:px-8 lg:px-10 xl:px-12">
        <Navbar />
        <Spacing />
        {children}
      </div>
    </div>
  );
};

export default Layout;
