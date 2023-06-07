import React from "react";
import styled from "styled-components";
import { Card } from "../styles/Card";
import ResponsiveStyle from "../styles/ResponsiveStyles";
import HeroImg from "../assets/HeroImg.jpeg";
import { ImageCard } from "../styles/Image";
import { Button } from "../styles/Button";
import { NavHashLink } from "react-router-hash-link";

const Hero = () => {
  return (
    <HeroStyle
      id="/"
      position="relative"
      background="#cccccc"
      // padding="1rem"
    >
      <HeroImgStyle src={HeroImg} />

      {/* <HeroDetails> */}
      {/* <h1>Upgrade Your Skill Now</h1> */}
      <NavHashLink to="#contact" smooth className="buttonLink">
        <Button
          background="white"
          color="black"
          border="2px solid black"
          hoverBackground="black"
        >
          Register Now
        </Button>
      </NavHashLink>
      {/* </HeroDetails> */}
    </HeroStyle>
  );
};

const HeroStyle = styled(Card)`
  width: 100%;
  height: auto;
  max-height: 100vh;
  .buttonLink {
    position: absolute;
    top: 75%;
    left: 20%;
    @media (max-width: 900px) {
      left: 15%;
    }
    @media (max-width: 650px) {
      left: 10%;
    }
  }
`;

const HeroImgStyle = styled.img`
  /* position: absolute; */
  /* background-color: red; */
  padding: 1rem;
  width: 100%;
  height: auto;
  max-height: 100%;
`;

const HeroDetails = styled(ResponsiveStyle)``;

export default Hero;
