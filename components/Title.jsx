import React from "react";

// const Title = ({ children, styles = null }) => {

//   return <h1 className="mt-6 text-7xl">{children}</h1>;
// };

const Title = ({ children, styling = "lg", custom }) => {
  const base = `${custom} text-gray-300 mb-6 lg:mb-10 tracking-widest`;
  if (styling === "lg") {
    return <h1 className={`${base} text-9xl`}>{children}</h1>;
  } else if (styling === "md") {
    return <h2 className={`${base} text-5xl`}>{children}</h2>;
  } else if ((styling = "sm")) {
    return <h3 className={`${base} text-3xl`}>{children}</h3>;
  }
};

export default Title;
