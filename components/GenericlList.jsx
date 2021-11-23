import React from "react";

// has a boolean prob show, if true then show name

// crew,tech, destination, all have a version of this, however the styling is all different
const GenericList = ({
  show,
  array,
  currentNav,
  currentlySelectedHandler,
  custom = { ul: "", li: "", a: "", active: "" },
}) => {
  // make a giant obj of the elements and pass in the css?
  return (
    <ul
      className={`flex justify-center my-4 space-x-6 lg:justify-start lg:my-10 tracking-widest ${custom.ul}`}
    >
      {array.map((item, index) => (
        <li
          key={index}
          onClick={() => currentlySelectedHandler(index)}
          className={`cursor-pointer hover:text-white ${custom.li}`}
        >
          <a
            className={`${index === currentNav && custom.active} py-2 ${
              custom.a
            }`}
          >
            {show && item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default GenericList;
