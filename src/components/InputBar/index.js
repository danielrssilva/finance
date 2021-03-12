import React, { useState, forwardRef } from "react";

import {
  Container,
  Button,
  StyledInputDiv,
  StyledInput,
  ToggleButton,
} from "./styles";
import { validateObject } from "../../util/validation";
import Select from "../Select";
import ErrorMessage from "../ErrorMessage";
import { format } from "date-fns";
import DateButton from "../DateButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RiArrowDropLeftLine } from "react-icons/ri";

import api from "../../services/api";
import { getId } from "../../services/auth";

const InputBar = ({ handleNewValue }) => {
  const [transaction, setTransaction] = useState({
    tags: [],
    date: format(new Date(), "dd/MM/yyyy"),
    user_id: getId(),
  });
  const [renderErrorNotification, setRenderErrorNotification] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [displayInputBar, setDisplayInputBar] = useState(true);
  const toggleInputBar = () => {
    setDisplayInputBar(!displayInputBar);
  };
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
          response = await api.post("/user/transactions/add", transaction);
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
            const newTransaction = {
              tags: [],
              date: format(new Date(), "dd/MM/yyyy"),
              user_id: getId(),
            };
            setTransaction(newTransaction);
            document.getElementById("value").value = 0;
            document.getElementById("type").selectedIndex = 0;
            setSelectedDate(new Date());
          }
        }
      })();
    } else {
      setRenderErrorNotification(true);
      setTimeout(() => {
        setRenderErrorNotification(false);
      }, 3000);
    }
  };
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Container displayInputBar={displayInputBar}>
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
          Cadastrar
        </Button>
      </Container>
      <ToggleButton displayInputBar={displayInputBar} title="Esconder barra">
        <RiArrowDropLeftLine
          style={{
            height: "40px",
            width: "40px",
          }}
          onClick={() => toggleInputBar()}
        />
      </ToggleButton>
      {renderErrorNotification && (
        <ErrorMessage text="Todos os campos são obrigatórios!" />
      )}
    </div>
  );
};

export default InputBar;
