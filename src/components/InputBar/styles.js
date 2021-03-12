import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  background: #333333;
  padding: 10px;
  color: white;
  align-self: flex-start;
  border-radius: 0 10px 10px 0;
  border-right: ${({ displayInputBar }) => (displayInputBar ? "3px" : "5px")}
    solid #3eb489;
  transition: 0.3s all;
  margin-left: ${({ displayInputBar }) => (displayInputBar ? "0" : "-640px")};
`;

export const ToggleButton = styled.div`
  cursor: pointer;
  transition: 0.3s all;
  transform-origin: center center;
  svg {
    color: #3eb489;
    transform: ${({ displayInputBar }) =>
      displayInputBar ? "rotate(0deg)" : "rotate(180deg)"};
  }
  &:hover {
    svg {
      transition: 0.1s all;
      color: #2edcb1;
    }
  }
`;

export const Button = styled.button`
  border-radius: 6px;
  border: none;
  height: 35px;
  padding: 0 1rem;
  background: #2edcb1;
  color: #333333;
  font-weight: bold;
  &:hover {
    background: #d5f8ef;
  }
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
    background: #2edcb1;
    border: 2px solid white;
    padding: 7px;
  }
`;
export const StyledInput = styled.input`
  border-radius: 6px;
  border: 2px solid white;
  background: none;
  color: white;
  height: 30px;
  padding: 0 0 0 5px;
  margin-left: 0.3rem;
`;
