import React from "react";
import Image from "next/image";
import { useSpaceData } from "../store/datahook";
import Header from "../components/Header";
import Container, { ContainerItem } from "../components/Container";
import GenericList from "../components/GenericlList";

const Crew = () => {
  const {
    navList,
    currentNav,
    currentlySelected,
    currentImage,
    currentlySelectedHandler,
  } = useSpaceData("crew");

  console.log(currentlySelected);

  return (
    <div>
      <Header span={"02 "}>Meet your crew</Header>
      <Container>
        <ContainerItem>
          <Image
            src={currentImage}
            alt={currentlySelected.name}
            width="300"
            height="300"
            objectFit="contain"
          />
        </ContainerItem>
        <ContainerItem>
          <div>
            <GenericList
              array={navList}
              currentNav={currentNav}
              currentlySelectedHandler={currentlySelectedHandler}
            />
            <h3 className="text-gray-500 ">{currentlySelected.role}</h3>
            <h2 className="my-2 text-2xl font-barlow">
              {currentlySelected.name}
            </h2>
            <p className="my-8">{currentlySelected.bio}</p>
          </div>
        </ContainerItem>
      </Container>
    </div>
  );
};

export default Crew;
