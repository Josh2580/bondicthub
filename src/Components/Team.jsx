import React from "react";
import { Card } from "../styles/Card";
import Ear from "../assets/airpod.jpg";
import { ImageCard } from "../styles/Image";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Team = ({ name, job }) => {
  return (
    <Card flexDirection="column" gap="5px" width="100%" alignItems="center">
      <ImageCard
        src={Ear}
        alt="Image"
        width="200px"
        height="200px"
        borderRadius="50%"
      />

      <h3>{name}</h3>
      <p>{job}</p>
    </Card>
  );
};

export default Team;
