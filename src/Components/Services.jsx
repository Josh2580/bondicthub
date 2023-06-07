import React from "react";
import { Card } from "../styles/Card";
import Backend from "../assets/Backend.jpeg";
import { ImageCard } from "../styles/Image";
import { AllCard } from "../styles/AllCard";
import styled from "styled-components";

const Services = () => {
  return (
    <Card
      id="service"
      flexDirection="column"
      alignItems="center"
      paddingTop="70px"
    >
      <h2>Services</h2>
      <br />
      <AllCard $grid gap="2rem">
        <EachCard>
          <ImageCard src={Backend} maxHeight="200px" />
          <h3>Web Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis rem
            eligendi dolore. Sit, ut blanditiis. Lorem ipsum dolor sit amet.
          </p>
        </EachCard>

        <EachCard flexDirection="column" gap="1rem" alignItems="center">
          <ImageCard src={Backend} maxHeight="200px" />
          <h3>Forex Trading</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis rem
            eligendi dolore. Sit, ut blanditiis. Lorem ipsum dolor sit amet.
          </p>
        </EachCard>

        <EachCard flexDirection="column" gap="1rem" alignItems="center">
          <ImageCard src={Backend} maxHeight="200px" />
          <h3>Digital Marketing</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis rem
            eligendi dolore. Sit, ut blanditiis. Lorem ipsum dolor sit amet.
          </p>
        </EachCard>

        <EachCard flexDirection="column" gap="1rem" alignItems="center">
          <ImageCard src={Backend} maxHeight="200px" />
          <h3>Content Creation</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis rem
            eligendi dolore. Sit, ut blanditiis. Lorem ipsum dolor sit amet.
          </p>
        </EachCard>
      </AllCard>
    </Card>
  );
};

const EachCard = styled(Card)`
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  box-shadow: 0.5px 0.5px 5px 3px #dadada;
  padding: 0rem 1rem 1rem 1rem;
  margin: 2px;
  width: 100%;
`;

export default Services;
