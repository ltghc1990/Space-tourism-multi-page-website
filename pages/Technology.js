import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Header from "../components/Header";
import { useSpaceData } from "../store/datahook";
import Container from "../components/Container";
import { ContainerItem } from "../components/Container";
import GenericList from "../components/GenericlList";

const Technology = () => {
  const {
    navList,
    currentNav,
    currentlySelected,
    currentImage,
    currentlySelectedHandler,
  } = useSpaceData("technology");

  console.log(currentlySelected);

  const [innerWidth, setInnerWidth] = useState();

  useEffect(() => {
    const onResize = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

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
              innerWidth < 768
                ? currentImage.imageLandscape
                : currentImage.imagePortrait
            }
            width={innerWidth < 768 ? "300" : "500"}
            height={innerWidth < 768 ? "300" : "500"}
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
            <h2 className="text-4xl">{currentlySelected.name}</h2>
            <p>{currentlySelected.description}</p>
          </div>
        </ContainerItem>
      </Container>
    </div>
  );
};

export default Technology;
