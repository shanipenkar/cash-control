import React, { useState } from "react";
import AddExpense from "../components/AddExpense";
import "../shared/styles.css";

const Cashflow = () => {
  return (
    <div className="container px-6 py-7">
    <h1 className="flex justify-center font-extrabold text-5xl pb-2 text-[#EEEEEE]">Cash Flow</h1>
      <div className="pt-3 flex justify-center">
        <button className="btn">Add Expense</button>
        <button className="btn">Add Income</button>
      </div>
      <AddExpense/>
    </div>
  );
};

export default Cashflow;

// const handleSubmit = (event) => {
//   event.preventDefault();
//   // Add code here to handle form submission and save the expense to the backend
//   console.log(expense);
// }
