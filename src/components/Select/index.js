import React from "react";

import { Container } from "./styles";

const Select = ({ handleChange, type, id, label, options }) => {
  return (
    <Container>
      <label for={id}>{label}</label>
      <div>
        <select id={id} onChange={({ target }) => handleChange(target)}>
          <option hidden defaultValue>
            Escolha {type}
          </option>
          {options?.map((opt) => {
            return <option value={opt}>{opt}</option>;
          })}
        </select>
      </div>
    </Container>
  );
};

export default Select;
