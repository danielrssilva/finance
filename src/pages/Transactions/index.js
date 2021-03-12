import React, { useEffect, useState } from "react";

import InputBar from "../../components/InputBar";
import MonthCard from "../../components/MonthCard";

import { format, subMonths } from "date-fns";
import { Container } from "./styles";
import api from "../../services/api";
import { getId } from "../../services/auth";

import { ReactComponent as Logo } from "../../imgs/mint-logo.svg";

const Transactions = () => {
  const today = new Date();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function loadTransactions() {
      let response = await api.get(`/user/transactions/${getId()}`);
      setTransactions(response.data);
    }
    loadTransactions();
  }, []);

  const handleNewValue = () => {
    async function loadTransactions() {
      let response = await api.get(`/user/transactions/${getId()}`);
      setTransactions(response.data);
    }
    loadTransactions();
  };
  return (
    <Container>
      <InputBar handleNewValue={handleNewValue} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
          alignItems: "center",
        }}
      >
        <MonthCard
          monthlyTransactions={transactions}
          month={format(subMonths(today, 2), "dd/MM/yyyy")}
          handleNewValue={handleNewValue}
        />
        <MonthCard
          monthlyTransactions={transactions}
          month={format(subMonths(today, 1), "dd/MM/yyyy")}
          handleNewValue={handleNewValue}
        />
        <MonthCard
          monthlyTransactions={transactions}
          month={format(today, "dd/MM/yyyy")}
          handleNewValue={handleNewValue}
          isCurrentMonth
        />
        <MonthCard monthlyTransactions={[]} month="" empty />
        <MonthCard monthlyTransactions={[]} month="" empty />
      </div>
      <Logo
        title="Powered by Hya Corp."
        style={{
          height: "55px",
          width: "124px",
          bottom: "1rem",
          right: "1.5rem",
          position: "absolute",
        }}
      />
    </Container>
  );
};

export default Transactions;
