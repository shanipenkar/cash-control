import React, { useState, useContext, useEffect } from "react";
import { TransactionContext } from "../TransactionsContext";
// import { DataContext } from "../DataContext";

const Balance = () => {
  const [TotalExpenses, setTotalExpenses] = useState(0);
  const [TotalIncomes, setTotalIncomes] = useState(0);
  const { state } = useContext(TransactionContext);
  // const { transactions, categories } = useContext(DataContext);

  useEffect(() => {
    // This function is called whenever transactions change
    setTotalIncomes(
      state.transactions.reduce((acc, current) => {
        return current.type === "income" ? acc + Number(current.amount) : acc;
      }, 0)
    );
    setTotalExpenses(
      state.transactions.reduce((acc, current) => {
        return current.type === "expense" ? acc + Number(current.amount) : acc;
      }, 0)
    );
  }, [state]);

  return (
    <div className=" pt-5 text-center text-xl text-textColor">
      <p>Total Expenses: {TotalExpenses}</p>
      <p>Total Incomes: {TotalIncomes}</p>
      <p>Balance: {TotalIncomes - TotalExpenses}</p>
    </div>
  );
};

export default Balance;
