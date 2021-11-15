import React, { useState, useReducer } from "react";
import Title from "../components/Title";
import Lead from "../components/Lead";
import Container from "../components/Container";
import PlanetsList from "../components/destination/PlanetsList";
import Image from "next/image";
// grab data and put into state
import data from "../store/data.json";

const Destination = () => {
  const { destinations } = data;

  // prob shouldnt have used a reducer...
  // could also add a query param for the planets..

  const initialState = () => {
    const planets = destinations.map((item) => item.name);
    const currentPlanet = 0;
    const currentPlanetData = destinations[0];
    return {
      planets: planets,
      currentPlanet: currentPlanet,
      currentPlanetData: currentPlanetData,
    };
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "selectPlanet":
        return {
          ...state,
          currentPlanet: action.currentPlanet,
          currentPlanetData: destinations[action.currentPlanet],
        };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState());
  console.log(state.currentPlanetData);
  // need to change the stock imagepath
  const currentImage = state.currentPlanetData.images.png.replace(".", "");

  console.log(state.currentPlanetData);

  return (
    <div className="">
      <Title styling="sm">PICK YOUR DESTINATION</Title>
      <div className="border lg:flex lg:items-center">
        <Container>
          {/* have to add padding */}
          <Image
            src={currentImage}
            width="300px"
            height="300px"
            alt={state.cuurentPlanet}
          />
        </Container>
        <Container>
          <PlanetsList
            currentPlanet={state.currentPlanet}
            planets={state.planets}
            dispatch={dispatch}
          />
          <div>
            <Title styling="lg" custom="uppercase">
              {state.currentPlanetData.name}
            </Title>
            <Lead>{state.currentPlanetData.description}</Lead>
            <br className="border" />
            <div className="flex justify-between text-left">
              <div>
                <span className="text-xs">AVG DISTANCE</span>
                <Lead custom="text-2xl">
                  {state.currentPlanetData.distance}
                </Lead>
              </div>
              <div>
                <span className="text-xs">EST TRAVEL TIME</span>
                <Lead custom="text-2xl">{state.currentPlanetData.travel}</Lead>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Destination;
