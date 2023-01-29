import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AddTransactionForm from "../components/AddTransactionForm";
import "../shared/styles.css";

const Cashflow = () => {
  const History = useHistory();

  const onAddExpensePress = (() => {
    History.push({
      pathname: "/addtransaction",
    state: {transactionType: "expense"}});
  });

  const onAddIncomePress = (() => {
    History.push({
      pathname: "/addtransaction",
    state: {transactionType: "income"}});
  });

  return (
    <div className="px-6 py-10">
    <h1 className="flex justify-center font-extrabold text-5xl pb-2 text-[#EEEEEE]">Cash Flow</h1>
      <div className="pt-3 flex justify-center">
        <button className="btn hover:bg-primary" onClick={onAddExpensePress}>Add Expense</button>
        <button className="btn hover:bg-primary" onClick={onAddIncomePress}>Add Income</button>
      </div>
    </div>
  );
};

export default Cashflow;

// const handleSubmit = (event) => {
//   event.preventDefault();
//   // Add code here to handle form submission and save the expense to the backend
//   console.log(expense);
// }
