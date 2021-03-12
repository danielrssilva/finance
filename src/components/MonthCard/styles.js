import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  margin: 0 1rem;
  color: ${({ isCurrentMonth }) => (isCurrentMonth ? "#333333" : "#888888")};
  opacity: ${({ empty }) => (empty ? "0" : "1")};
  > .month {
    display: flex;
    align-items: center;
    justify-content: ${({ isCurrentMonth }) =>
      isCurrentMonth ? "space-between" : "center"};
    margin-left: ${({ isCurrentMonth }) => (isCurrentMonth ? "2rem" : "")};
    padding: ${({ isCurrentMonth }) => (isCurrentMonth ? "0 1.5rem" : "")};
    background: white;
    border-radius: ${({ isCurrentMonth }) => (isCurrentMonth ? "20px" : "")};
    z-index: 0;
    font-weight: bold;
    height: 30px;
    text-transform: capitalize;
  }
  > .span {
    width: 3rem;
    background: #333333;
    border-radius: 10px 0 0 0;
    height: 20px;
    position: absolute;
    z-index: -1;
    margin-top: 15px;
  }
`;
export const TableDiv = styled.div`
  background: ${({ isCurrentMonth }) =>
    isCurrentMonth ? "#333333" : "#888888"};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: ${({ isCurrentMonth }) =>
    isCurrentMonth ? "0 10px 10px" : "10px"};
  border-bottom: 4px solid
    ${({ isCurrentMonth }) => (isCurrentMonth ? "#3eb489" : "#Bfe8cf")};
  color: white;
  text-align: center;
  padding: 1rem 0 1.6rem 0;
  font-size: 1.4rem;
  top: 0;
  height: ${({ isCurrentMonth }) => (isCurrentMonth ? "65vh" : "50vh")};
  overflow-y: auto;
  svg {
    opacity: ${({ isCurrentMonth }) => (isCurrentMonth ? "1" : "0.4")};
  }
  table {
    width: 100%;
    tr td {
      font-size: 0.9rem;
      svg {
        color: ${({ isCurrentMonth }) =>
          isCurrentMonth ? "white" : "lightgray"};
        transition: 0.2s color;
      }
      &:hover {
        cursor: ${({ isCurrentMonth }) =>
          isCurrentMonth ? "pointer" : "unset"};
        svg {
          color: ${({ isCurrentMonth }) => (isCurrentMonth ? "#B43E5E" : "")};
          transition: 0.2s color;
        }
      }
    }
  }
  > div > svg {
    transform: rotate(90deg);
  }
  .total-revenue {
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 10px;
    height: 50px;
    width: 80%;
    border-left: 4px solid
      ${({ monthRevenue }) => (monthRevenue >= 0 ? "#3eb489" : "#B43E5E")};
    border-right: 4px solid
      ${({ monthRevenue }) => (monthRevenue >= 0 ? "#3eb489" : "#B43E5E")};
    color: ${({ monthRevenue }) => (monthRevenue >= 0 ? "#3eb489" : "#B43E5E")};
    svg {
      margin-right: 1rem;
      transform: none !important;
    }
  }
  .empty {
    font-size: 1rem;
    bottom: 0;
  }
`;
