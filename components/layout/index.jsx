import React, { useContext } from "react";
import Navbar from "./Navbar";
import Spacing from "../Spacing";
import { BgContext } from "../../store/BgProvider";

//  context used because the bg is set in the navbar.
const Layout = ({ children }) => {
  const { bg } = useContext(BgContext);
  console.log(bg);
  return (
    <div className="bg-gray-900">
      <div
        className="h-screen px-4 mx-auto bg-center bg-no-repeat bg-cover max-w-screen-2xl md:px-8 lg:px-10 xl:px-12"
        style={{ backgroundImage: `url(${bg.path})` }}
      >
        <Spacing />
        <Navbar />
        <Spacing />
        {children}
      </div>
    </div>
  );
};

export default Layout;
