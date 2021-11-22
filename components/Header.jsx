import React from "react";

// used in crew, destination and technology
// seems like we hide this on mobile...
const Header = ({ children, span }) => {
  return (
    <h1 className="mb-8 tracking-wider text-gray-100 uppercase md:text-2xl lg:text-3xl font-Barlow">
      <span className="text-gray-500">{span}</span>
      {children}
    </h1>
  );
};

export default Header;
