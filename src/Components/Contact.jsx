import React from "react";
import Form from "./Form";
import styled from "styled-components";
import Location from "./Location";
import { Card } from "../styles/Card";

const Contact = () => {
  return (
    <Card
      paddingTop="50px"
      id="contact"
      flexDirection="column"
      alignItems="center"
      // boxShadow="0.5px 0.5px 5px 3px #dadada"
      padding="70px 0px 32px 0px"
    >
      <h2>Contact Us</h2>

      <ContactStyle>
        <Form />
        <Location />
      </ContactStyle>
    </Card>
  );
};

const ContactStyle = styled(Card)`
  gap: 2rem;
  padding: 1rem;
  margin: 16px 2px;
  width: 100%;
  box-shadow: 0.5px 0.5px 5px 3px #dadada;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

export default Contact;
