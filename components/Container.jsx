import React from "react";

const Container = ({ children }) => {
  // remember to set the container text color here
  return (
    <div className="max-w-screen-sm mx-auto text-center border border-green-400 lg:text-left">
      <div className="">{children}</div>
    </div>
  );
};

export default Container;
