import React from "react";
import { Card } from "../styles/Card";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaMapMarkedAlt } from "react-icons/fa";
import styled from "styled-components";
import { ImageCard } from "../styles/Image";
import Map from "../assets/mapi.jpg";

const Location = () => {
  return (
    <Card flexDirection="column" gap="1rem" flex="50%">
      <MapImg src={Map} />
      <Each>
        <FaMapMarkedAlt />
        <p>Address of Office</p>
      </Each>
      <Each>
        <AiOutlinePhone />
        <p>Phone Number</p>
      </Each>
      <Each>
        <AiOutlineMail />
        <p>Email Address</p>
      </Each>
    </Card>
  );
};

const Each = styled(Card)`
  gap: 10px;
  align-items: center;
`;

const MapImg = styled(ImageCard)`
  width: 100%;
  height: 200px;
  @media (max-width: 800px) {
    height: auto;
    max-height: 300px;
  }
`;

export default Location;
