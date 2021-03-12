import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  user-select: none;
`;
export const LeftPanel = styled.div`
  background: white;
  height: calc(100vh - 55px);
  width: 50%;
  overflow: hidden;
`;

export const RightPanel = styled.div`
  background: #2d2d2d;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LoginForm = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  background: white;
  width: 300px;
  max-width: 320px;
  min-height: 360px;
  padding: 0 3rem;
  box-sizing: border-box;
  .id-badge {
    height: 55px;
    width: 55px;
  }
  button {
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
  }
  input {
    border-radius: 6px;
    border-bottom: 2px solid #333333;
    background: none;
    height: 30px;
    padding: 0 0 0 5px;
    margin: 5px 0.3rem;
  }
  .password-wrapper {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    span {
      position: absolute;
      right: 15px;
      margin-top: 1px;
      &:hover {
        fill: #d5f8ef;
        cursor: pointer;
      }
    }
  }
  @keyframes line-animation {
    to {
      stroke-dashoffset: 0;
    }
  }
`;
export const Title = styled.h1`
  font-weight: 100;
  font-size: 35px;
`;

export const FormGroup = styled.div``;
