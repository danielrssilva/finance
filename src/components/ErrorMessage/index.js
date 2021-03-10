import React from "react";

import { Container } from "./styles";
import { BiErrorCircle } from "react-icons/bi";

const ErrorMessage = () => {
  return (
    <Container>
      <BiErrorCircle />
      <p>Todos os campos são obrigatórios!</p>
    </Container>
  );
};

export default ErrorMessage;
