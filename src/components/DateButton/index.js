import React from "react";

import { Container } from "./styles";

const DateButton = ({ children, onClick }) => {
  return <Container onClick={onClick}>{children}</Container>;
};

export default DateButton;
