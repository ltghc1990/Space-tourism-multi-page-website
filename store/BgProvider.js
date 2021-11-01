import React, { useState, createContext, useEffect } from "react";
import { useRouter } from "next/router";

import { navlinks } from "../components/layout/navlinks";
export const BgContext = createContext("lol");

const BgProvider = ({ children }) => {
  const { asPath } = useRouter();

  // use the router to set the active Nav, and the bg

  const [bg, setBg] = useState("");

  const updateBg = (param) => {
    navlinks.find((item) => {
      if (item.link === param) {
        setBg({ path: item.bgPath });
      }
    });
  };

  // auto update the bg
  useEffect(() => {
    updateBg(asPath);
  }, [asPath]);

  return (
    <BgContext.Provider value={{ bg, updateBg }}>{children}</BgContext.Provider>
  );
};

export default BgProvider;
