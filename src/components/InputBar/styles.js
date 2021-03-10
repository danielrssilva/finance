import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const Button = styled.button`
  border-radius: 6px;
  border: none;
  height: 35px;
  padding: 0 1rem;
  background: #333333;
  color: white;
`;
export const StyledInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 1rem;
  label {
    font-size: 0.8rem;
    margin-bottom: 0.3rem;
  }
  div {
    padding-left: 0.3rem;
  }
  select {
    border-radius: 6px;
    border: 2px solid #333333;
    padding: 7px;
  }
`;
export const StyledInput = styled.input`
  border-radius: 6px;
  border: 2px solid #333333;
  height: 30px;
  padding: 0 0 0 5px;
  margin-left: 0.3rem;
`;
