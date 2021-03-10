import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 1rem;
  margin-left: 0.3rem;
  padding: 4px;
  border-radius: 6px;
  border: 2px solid #333333;
  cursor: pointer;
  user-select: none;
  transition: 0.2s all;
  &:hover {
    background: lightgrey;
  }
`;
