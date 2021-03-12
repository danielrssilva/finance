import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  background: #333333;
  color: white;
  height: 55px;
  font-family: "Comfortaa";
  .logo {
    padding: 0 50px;
    svg {
      color: #3eb489;
      height: 25px;
      width: 25px;
    }
  }
  nav {
    display: flex;
    justify-content: space-between;
    padding-left: 1rem;
    width: 100%;
    div {
      display: flex;
      align-items: center;
      a {
        text-decoration: none;
        color: #2edcb1;
        font-weight: 900;
        transition: 0.2s all;
        &:hover {
          color: #d5f8ef;
        }
      }
    }
  }
  span {
    display: flex;
    align-items: center;
    padding-right: 50px;
    color: #2edcb1;
    transition: 0.2s all;
    &:hover {
      cursor: pointer;
      color: #d5f8ef;
      svg {
        color: #d5f8ef;
      }
    }
    svg {
      padding-right: 5px;
      height: 20px;
      width: 20px;
      color: #2edcb1;
      transition: 0.2s all;
    }
  }
`;

export const GreenDecoration = styled.div`
  height: 6px;
  width: ${({ isAuthenticated }) =>
    isAuthenticated ? "calc(100% - 125px)" : "calc(100% - 250px)"};
  margin-left: ${({ isAuthenticated }) => (isAuthenticated ? "unset" : "125px")};
  right: ${({ isAuthenticated }) => (isAuthenticated ? "0" : "unset")};
  background-color: #3eb489;
  border-radius: ${({ isAuthenticated }) => (isAuthenticated ? "0 0 0 5px" : "0 0 5px 5px")};
  position: absolute;
  top: 0;
`;
