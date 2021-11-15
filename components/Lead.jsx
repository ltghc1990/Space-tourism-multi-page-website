import React from "react";

const Lead = ({ children, custom }) => {
  const base = `${custom}`;
  return <p className={`${base} mb-6 md:text-lg lg:mb-10`}>{children}</p>;
};

export default Lead;
