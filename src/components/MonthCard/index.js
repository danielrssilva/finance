import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Container, TableDiv } from "./styles";
import { format } from "date-fns";
import { pt } from "date-fns/locale";

import { MdBookmarkBorder, MdAttachMoney } from "react-icons/md";
import { FaCashRegister } from "react-icons/fa";
import { BiCalendarAlt } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import { ImLeaf } from "react-icons/im";
import { FcBullish, FcBearish } from "react-icons/fc";

import api from "../../services/api";
import { getId } from "../../services/auth";

const MonthCard = ({
  month,
  monthlyTransactions,
  isCurrentMonth,
  empty,
  handleNewValue,
}) => {
  const [transactions, setTransactions] = useState([]);
  const [monthRevenue, setMonthRevenue] = useState(0);
  const [monthRevenueInBRL, seMonthRevenueInBRL] = useState("");
  useEffect(() => {
    let transactions = monthlyTransactions.filter(
      (transaction) =>
        transaction.date.substring(3, 10) === month.substring(3, 10)
    );
    let newSum = 0;
    transactions.map(({ type, value }) => {
      if (type === "Depósito" || type === "Transferencia recebida")
        newSum += value;
      else newSum -= value;
    });
    setMonthRevenue(newSum);
    seMonthRevenueInBRL(
      newSum.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
    );
    setTransactions(transactions);
  }, [monthlyTransactions, month]);

  const handleDelete = (id) => {
    // if (isCurrentMonth) {
    async function deleteTransaction() {
      await api.delete(`/user/transaction/delete?user=${getId()}&transaction=${id}`);
      handleNewValue();
    }
    deleteTransaction();
    // }
  };
  return (
    <Container isCurrentMonth={isCurrentMonth} empty={empty}>
      <div className="month">
        {format(
          new Date(month.substring(6, 10), month.substring(3, 5) - 1, 1),
          "MMMM",
          {
            locale: pt,
          }
        )}
        {isCurrentMonth && <ImLeaf color="#92D9AD" />}
      </div>
      {isCurrentMonth && <div className="span" />}
      <TableDiv
        isCurrentMonth={isCurrentMonth}
        empty={empty}
        monthRevenue={monthRevenue}
      >
        <table>
          <tr>
            {/* <th title="Tags">
              <MdBookmarkBorder />
            </th> */}
            <th title=" "></th>
            <th title="Tipo de transação">
              <FaCashRegister />
            </th>
            <th title="Valor da transação">
              <MdAttachMoney />
            </th>
            <th title="Data da transação">
              <BiCalendarAlt />
            </th>
          </tr>
          {transactions &&
            transactions.length !== 0 &&
            transactions.map(({ id, tags, type, value, date }) => {
              return (
                <tr key={id}>
                  {/* <td title="Tags">{tags && tags.length === 0 ? " ―" : tags}</td> */}
                  <td title="Deletar" onClick={() => handleDelete(id)}>
                    <FiTrash2 />
                  </td>
                  <td title="Tipo de transação">{type || " ―"}</td>
                  <td title="Valor da transação">
                    {value.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }) || " ―"}
                  </td>
                  <td title="Data da transação">
                    {date.substring(0, 5) || " -"}
                  </td>
                </tr>
              );
            })}
        </table>
        {transactions?.length !== 0 &&
          (monthRevenue >= 0 ? (
            <div
              className="total-revenue"
              title={`Você guardou um total de ${monthRevenueInBRL} este mês.`}
            >
              <FcBullish />
              {monthRevenueInBRL}
            </div>
          ) : (
            <div
              className="total-revenue"
              title={`Você gastou um total de ${monthRevenueInBRL} a mais este mês.`}
            >
              <FcBearish />
              {monthRevenueInBRL}
            </div>
          ))}
        {transactions.length === 0 && (
          <div className="no-transactions">
            <ImLeaf />
            <p className="empty">Nenhuma transação cadastrada</p>
          </div>
        )}
      </TableDiv>
    </Container>
  );
};
MonthCard.propTypes = {
  monthlyTransactions: PropTypes.func.isRequired,
  isCurrentMonth: PropTypes.bool,
  empty: PropTypes.bool,
};
export default MonthCard;
