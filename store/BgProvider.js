import React, { useState, createContext, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import useCurrentWidthHook from "./currentWidthHook";

// bg paths are in navlinks
import { navlinks } from "../components/layout/navlinks";
export const BgContext = createContext();

const BgProvider = ({ children }) => {
  const { breakpoint } = useCurrentWidthHook();

  const { asPath } = useRouter();

  // use the router to set the active Nav, and the bg
  const [bg, setBg] = useState("");

  const updateBg = (pathparam, breakpointparam) => {
    const bgObject = navlinks.find((item) => item.link === pathparam);
    if (breakpointparam === "mobile") {
      setBg({ path: bgObject.bgMobilePath });
    } else if (breakpoint === "tablet") {
      setBg({ path: bgObject.bgTabletPath });
    } else setBg({ path: bgObject.bgDesktopPath });
  };

  // runs once, and auto updates the bg when path or the breakpoint changes
  useEffect(() => {
    updateBg(asPath, breakpoint);
  }, [asPath, breakpoint]);

  return (
    <BgContext.Provider value={{ bg, breakpoint }}>
      {children}
    </BgContext.Provider>
  );
};

export default BgProvider;
