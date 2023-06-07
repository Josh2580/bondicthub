import React from "react";
import Team from "./Team";
import { AllCard } from "../styles/AllCard";
import { Card } from "../styles/Card";
import styled from "styled-components";

const Products = () => {
  return (
    <>
      <TeamHead>Team Members</TeamHead>
      <AllCard $grid gap="1rem">
        <Team name="one Person" job="Full Stack Developer" />
        <Team name="Two Person" job="Digital Marketter" />
        <Team name="Third Person" job="COntent Writer" />
        <Team name="Another Person" job="Forex" />
      </AllCard>
    </>
  );
};

const TeamHead = styled.h2`
  /* background: red; */
  text-align: center;
  padding: 70px 0px 32px 0px;
`;

export default Products;
