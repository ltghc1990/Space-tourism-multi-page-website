import { useState } from "react";
import data from "../store/data.json";
// since all pages use the navlink to switch information, might as well make a reusable hook instead of repeated code in 3 seperate pages

export const useSpaceData = (param) => {
  // params are destinations, crew, technology
  const [spaceData, setSpaceData] = useState(data[param]);
  // has to be an index, because no ids

  //this is only for the navList since i dont want to return the whole obj to the navlist
  const [currentNav, setCurrentNav] = useState(0);
  // holds the whole space obj
  const [currentlySelected, setCurrentlySelected] = useState(spaceData[0]);

  // we will then have an object with an array, with which we need to show the current item in the array.

  // param is index of the array
  const currentlySelectedHandler = (paramIndex) => {
    const currentData = spaceData.find((item, index) => index === paramIndex);
    setCurrentlySelected(currentData);
    setCurrentNav(paramIndex);
  };

  const navList = (() => {
    return spaceData.map((item) => item.name);
  })();
  // need to muatate the path for it to work currectly
  const currentImage = currentlySelected.images.png.replace(".", "");

  return {
    spaceData,
    navList,
    currentNav,
    currentlySelected,
    currentImage,
    currentlySelectedHandler,
  };
};
