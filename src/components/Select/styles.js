import styled from "styled-components";

export const Container = styled.div`
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
