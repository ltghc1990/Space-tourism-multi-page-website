import React from "react";

const Container = ({ children, reverse }) => {
  console.log(reverse);
  return (
    <div
      className={`mx-auto text-center border md:flex md:flex-col md:items-center lg:flex-row lg:text-left  ${
        reverse && "md:flex-col-reverse lg:flex-row-reverse"
      }`}
    >
      {children}
    </div>
  );
};

export default Container;

// maybe have text content center  and at lg text left
// at large width takes up 50%
export const ContainerItem = ({ children }) => {
  return (
    <div className="flex justify-center border border-red-500 lg:w-6/12">
      {children}
    </div>
  );
};
