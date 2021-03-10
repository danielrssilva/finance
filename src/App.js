import React, { useState, useEffect } from "react";
import "./App.css";
import InputBar from "./components/InputBar";
import MonthCard from "./components/MonthCard";
import { format, subMonths } from "date-fns";
import api from "./services/api";

import { ReactComponent as Logo } from "./imgs/mint-logo.svg";
function App() {
  const today = new Date();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function loadTransactions() {
      let response = await api.get(`/transaction`);
      setTransactions(response.data);
    }
    loadTransactions();
  }, []);

  const handleNewValue = () => {
    async function loadTransactions() {
      let response = await api.get(`/transaction`);
      setTransactions(response.data);
    }
    loadTransactions();
  };
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        padding: "10px",
        paddingBottom: "0",
        boxSizing: "border-box",
      }}
    >
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
    </div>
  );
}

export default App;
