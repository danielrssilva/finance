import React from "react";

import { Container } from "./styles";
import { BiErrorCircle } from "react-icons/bi";

const ErrorMessage = ({ text }) => {
  return (
    <Container>
      <BiErrorCircle />
      <p>{text}</p>
    </Container>
  );
};

export default ErrorMessage;
