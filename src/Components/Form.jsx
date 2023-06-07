import React from "react";
import { Card } from "../styles/Card";
import { Inputs, TextArea } from "../styles/Input";
import { Button } from "../styles/Button";

const Form = () => {
  return (
    <Card flexDirection="column" gap="1rem" flex="50%">
      <Inputs placeholder="Enter your name" width="100%" />
      <Inputs placeholder="Enter your email" width="100%" />
      <TextArea placeholder="Message Us" width="100%" height="150px" />
      <Button>Button</Button>
    </Card>
  );
};

export default Form;
