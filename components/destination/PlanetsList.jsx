import React from "react";

const PlanetsList = ({ planets, currentPlanet, dispatch }) => {
  // currentplanet is for css highlighting

  return (
    <ul className="flex justify-center my-4 space-x-6 lg:justify-start lg:my-10">
      {planets.map((item, index) => (
        <div
          key={index}
          onClick={() =>
            dispatch({ type: "selectPlanet", currentPlanet: index })
          }
          className="border cursor-pointer"
        >
          <li className={`${currentPlanet === index && "text-green-400"}`}>
            {item}
          </li>
        </div>
      ))}
    </ul>
  );
};

export default PlanetsList;
