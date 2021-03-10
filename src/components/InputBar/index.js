import React, { useState, forwardRef } from "react";

import { Container, Button, StyledInputDiv, StyledInput } from "./styles";
import { validateObject } from "../../util/validation";
import Select from "../Select";
import ErrorMessage from "../ErrorMessage";
import { format } from "date-fns";
import DateButton from "../DateButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import api from "../../services/api";

const InputBar = ({ handleNewValue }) => {
  const [transaction, setTransaction] = useState({
    tags: [],
    date: format(new Date(), "dd/MM/yyyy"),
  });
  const [renderErrorNotification, setRenderErrorNotification] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const InputButton = forwardRef(({ value, onClick }, ref) => (
    <StyledInputDiv>
      <label for="date">Data da transação</label>
      <DateButton
        id="date"
        className="example-custom-input"
        onClick={onClick}
        ref={ref}
        children={value}
      />
    </StyledInputDiv>
  ));
  const transactionOptions = [
    "Saque",
    "Depósito",
    "Boleto",
    "Pagamento",
    "Transferencia enviada",
    "Transferencia recebida",
  ];

  const handleChange = (value, { id }) => {
    setRenderErrorNotification(false);
    let val = value;
    val = parseFloat(value);
    const newTest = { ...transaction, [id]: val };
    setTransaction(newTest);
  };
  const handleDateChange = (date) => {
    setRenderErrorNotification(false);
    setSelectedDate(date);
    let newTransaction = transaction;
    newTransaction.date = format(date, "dd/MM/yyyy");
    setTransaction(newTransaction);
  };
  const handleSelect = (target) => {
    setRenderErrorNotification(false);
    const newTest = { ...transaction, [target.id]: target.value };
    setTransaction(newTest);
  };
  const handleSubmit = () => {
    if (validateObject(transaction)) {
      (async () => {
        let response = null;
        try {
          response = await api.post("/transaction/", transaction);
        } catch (err) {
          if (err?.response?.data) {
            // setStatus("error");
            // setTitle("ERROR");
            // setMessage(`${err.response.data.message}`);
            console.error("Erro ao cadastrar transação.");
          }
        } finally {
          if (response != null) {
            // setStatus("success");
            // setTitle("SUCCESS");
            // setMessage("Cadastro realizado com sucesso.");
            setRenderErrorNotification(false);
            handleNewValue();
            const newTest = { tags: [] };
            setTransaction(newTest);
            document.getElementById("value").value = 0;
            document.getElementById("type").selectedIndex = 0;
            setSelectedDate(new Date());
          }
        }
      })();
    } else {
      setRenderErrorNotification(true);
    }
  };
  return (
    <Container>
      <Select
        handleChange={handleSelect}
        id="type"
        label="Tipo da transação"
        type="o tipo"
        options={transactionOptions}
      />
      <StyledInputDiv>
        <label for="value">Valor da transação</label>
        <StyledInput
          id="value"
          type="number"
          step="0.25"
          onChange={({ target }) => handleChange(target.value, target)}
        />
      </StyledInputDiv>
      <DatePicker
        selected={selectedDate}
        // locale="pt-BR"
        onChange={(date) => handleDateChange(date)}
        customInput={<InputButton />}
      />
      <Button type="submit" onClick={() => handleSubmit()}>
        Salvar
      </Button>
      {renderErrorNotification && <ErrorMessage />}
    </Container>
  );
};

export default InputBar;
