import React from "react";
import Image from "next/image";
import { useSpaceData } from "../store/datahook";
import Header from "../components/Header";
import Spacing from "../components/Spacing";
import Container from "../components/Container";
import { ContainerItem } from "../components/Container";
import GenericList from "../components/GenericlList";

const Destination = () => {
  const {
    navList,
    currentNav,
    currentlySelected,
    currentImage,
    currentlySelectedHandler,
  } = useSpaceData("destinations");

  console.log(currentlySelected);
  return (
    <div>
      <Spacing />
      <Header span={"01 "}>Pick your destination</Header>
      <Container>
        <ContainerItem>
          <Image
            src={currentImage}
            width="300"
            height="300"
            alt={currentlySelected.name}
            objectFit="contain"
          />
        </ContainerItem>
        <ContainerItem>
          <div className="max-w-md">
            <GenericList
              array={navList}
              currentlySelectedHandler={currentlySelectedHandler}
              currentNav={currentNav}
              custom={{}}
            ></GenericList>
            <h2 className="mb-4 text-6xl tracking-widest text-gray-100 uppercase font-barlow">
              {currentlySelected.name}
            </h2>
            <p className="mb-8 ">{currentlySelected.description}</p>
            <div className="border border-gray-300"></div>
            <Container>
              <ContainerItem>
                <div className="">
                  <p className="mt-8 text-xs uppercase">Avg. Distance</p>
                  <span className="text-3xl text-gray-100 font-barlow">
                    {currentlySelected.distance}
                  </span>
                </div>
              </ContainerItem>
              <ContainerItem>
                <div className="lg:flex lg:flex-col lg:justify-start">
                  <p className="mt-8 text-xs uppercase">Est. travel time</p>
                  <span className="text-3xl text-gray-100 font-barlow">
                    {currentlySelected.travel}
                  </span>
                </div>
              </ContainerItem>
            </Container>
          </div>
        </ContainerItem>
      </Container>
    </div>
  );
};

export default Destination;
