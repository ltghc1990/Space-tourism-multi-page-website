import React from "react";

// crew,tech, destination, all have a version of this, however the styling is all different
const GenericList = ({
  array,
  currentNav,
  currentlySelectedHandler,
  custom = { ul: "", div: "", li: "" },
}) => {
  // make a giant obj of the elements and pass in the css?
  return (
    <ul className="flex justify-center my-4 space-x-6 lg:justify-start lg:my-10">
      {array.map((item, index) => (
        <div
          key={index}
          onClick={() => currentlySelectedHandler(index)}
          className="text-white border cursor-pointer"
        >
          <li className={`${index === currentNav && "text-green-400"}`}>
            {item}
          </li>
        </div>
      ))}
    </ul>
  );
};

export default GenericList;
