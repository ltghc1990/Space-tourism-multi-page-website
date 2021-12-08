import React, { useState, useEffect, useRef, useContext } from "react";
import Image from "next/image";
import Header from "../components/Header";
import { useSpaceData } from "../store/datahook";
import Container from "../components/Container";
import { ContainerItem } from "../components/Container";
import GenericList from "../components/GenericlList";
import { BgContext } from "../store/BgProvider";
// updateBG
const Technology = () => {
  const {
    navList,
    currentNav,
    currentlySelected,
    currentImage,
    currentlySelectedHandler,
  } = useSpaceData("technology");

  // need this for useEffect to update the image when resized
  const { breakpoint } = useContext(BgContext);

  console.log(currentlySelected);
  console.log(breakpoint);

  if (typeof window === undefined) {
    return <div>Loading....</div>;
  }

  return (
    <div className="">
      <Header span={"03 "}>Space Launch 101</Header>
      <Container reverse>
        <ContainerItem>
          <Image
            src={
              breakpoint === "mobile"
                ? currentImage.imageLandscape
                : currentImage.imagePortrait
            }
            width={breakpoint === "mobile" ? "300" : "500"}
            height={breakpoint === "mobile" ? "300" : "500"}
            alt={currentlySelected.name}
            objectFit="contain"
          />
        </ContainerItem>
        <ContainerItem>
          <div className="max-w-md mx-auto">
            <GenericList
              array={navList}
              currentNav={currentNav}
              currentlySelectedHandler={currentlySelectedHandler}
            />
            <span className="uppercase">The terminology...</span>
            <h2 className="text-4xl text-gray-100">{currentlySelected.name}</h2>
            <p>{currentlySelected.description}</p>
          </div>
        </ContainerItem>
      </Container>
    </div>
  );
};

export default Technology;
