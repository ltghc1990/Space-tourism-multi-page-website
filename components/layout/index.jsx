import React, { useContext } from "react";
import Navbar from "./Navbar";
import Spacing from "../Spacing";
import { BgContext } from "../../store/BgProvider";

//  context used because the bg is set in the navbar.
const Layout = ({ children }) => {
  const { bg } = useContext(BgContext);
  console.log(bg);
  // remember if the bg looks weird its the vh
  return (
    <div className="bg-gray-900 ">
      <div
        className="h-screen px-6 mx-auto bg-center bg-no-repeat bg-cover font-barlow text-primary max-w-screen-3xl md:px-8 lg:px-10 xl:px-12 2xl:px-16"
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
