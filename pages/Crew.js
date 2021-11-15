import React from "react";
import Image from "next/image";
import Container from "../components/Container";
import GenericList from "../components/GenericList";
import Lead from "../components/Lead";
import Title from "../components/Title";

import { useSpaceData } from "../store/dataHook";

const Crew = () => {
  const {
    spaceData,
    navList,
    currentNav,
    currentlySelected,
    currentImage,
    currentlySelectedHandler,
  } = useSpaceData("crew");

  console.log(navList);
  console.log(currentlySelected);

  return (
    <div>
      <Title>
        <span className="text-gray-500">02 </span>MEET YOUR CREW
      </Title>
      {/*  */}

      <div className="FLEXPARENT">
        <Container>
          <Lead>{currentlySelected.role}</Lead>
          <Lead>{currentlySelected.name}</Lead>
          <Lead>{currentlySelected.bio}</Lead>
        </Container>
        <Container>
          <Image
            src={currentImage}
            alt="Crew Image"
            width="250"
            height="400"
            objectFit="cover"
          ></Image>
        </Container>
      </div>

      {/*  */}
      <GenericList
        array={navList}
        currentNav={currentNav}
        currentlySelectedHandler={currentlySelectedHandler}
      />
    </div>
  );
};

export default Crew;
