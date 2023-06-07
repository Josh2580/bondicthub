import React from "react";
import { Card } from "../styles/Card";
import Ear from "../assets/airpod.jpg";
import { ImageCard } from "../styles/Image";
import { AllCard } from "../styles/AllCard";

const Value = () => {
  return (
    <Card
      flexDirection="column"
      alignItems="center"
      gap="1rem"
      padding="70px 0px 32px 0px"
    >
      <h2>Values</h2>
      <AllCard $grid gap="1rem">
        <Card gap="5px" width="fit-content">
          <Card flex="20">
            <ImageCard
              src={Ear}
              alt="Image"
              width="50px"
              height="50px"
              borderRadius="50%"
            />
          </Card>
          <Card flex="80" flexDirection="column" gap="5px">
            <h3>Integrity</h3>
            <p>
              Honesty in delivery of my services to ensure credibility in
              building relationship and trust.
            </p>
          </Card>
        </Card>

        <Card gap="5px" width="fit-content">
          <Card flex="20">
            <ImageCard
              src={Ear}
              alt="Image"
              width="50px"
              height="50px"
              borderRadius="50%"
            />
          </Card>
          <Card flex="80" flexDirection="column" gap="5px">
            <h3>Transparent</h3>
            <p>
              What we agree is established. We don't alter our deals, unless on
              a legal agreement.
            </p>
          </Card>
        </Card>

        <Card gap="5px" width="fit-content">
          <Card flex="20">
            <ImageCard
              src={Ear}
              alt="Image"
              width="50px"
              height="50px"
              borderRadius="50%"
            />
          </Card>
          <Card flex="80" flexDirection="column" gap="5px">
            <h3>Understanding</h3>
            <p>
              I deliberately listen to my prospect and understand their request
              in building a website.
            </p>
          </Card>
        </Card>

        <Card gap="5px" width="fit-content">
          <Card flex="20">
            <ImageCard
              src={Ear}
              alt="Image"
              width="50px"
              height="50px"
              borderRadius="50%"
            />
          </Card>
          <Card flex="80" flexDirection="column" gap="5px">
            <h3>Creativity</h3>
            <p>
              Bent to acquiring and implemention of new ideas and inspirations.
            </p>
          </Card>
        </Card>

        <Card gap="5px" width="fit-content">
          <Card flex="20">
            <ImageCard
              src={Ear}
              alt="Image"
              width="50px"
              height="50px"
              borderRadius="50%"
            />
          </Card>
          <Card flex="80" flexDirection="column" gap="5px">
            <h3>Team-Work</h3>
            <p>
              Ability to work with a team of other developers, content writers,
              UI/UX designers and more in acheiving a common goal.
            </p>
          </Card>
        </Card>

        <Card gap="5px" width="fit-content">
          <Card flex="20">
            <ImageCard
              src={Ear}
              alt="Image"
              width="50px"
              height="50px"
              borderRadius="50%"
            />
          </Card>
          <Card flex="80" flexDirection="column" gap="5px">
            <h3>Learning</h3>
            <p>
              I'm bent to ever learning and developing myself in what I offer.
            </p>
          </Card>
        </Card>
      </AllCard>
    </Card>
  );
};

export default Value;
