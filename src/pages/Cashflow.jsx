import React, { useState } from "react";
import AddExpenseForm from "../components/AddExpenseForm";
// import AddTransaction from "../pages/AddTransaction";
import "../shared/styles.css";

const Cashflow = () => {
  const [addExpensePressed, setAddExpensePressed] = useState(false);

  const onAddExpensePress = (() => {
    setAddExpensePressed(!addExpensePressed);
    console.log(addExpensePressed);
  });

  return (
    <div className="px-6 py-7">
    <h1 className="flex justify-center font-extrabold text-5xl pb-2 text-[#EEEEEE]">Cash Flow</h1>
      <div className="pt-3 flex justify-center">
        <button className="btn hover:bg-primary" onClick={onAddExpensePress}>Add Expense</button>
        <button className="btn hover:bg-primary">Add Income</button>
      </div>
      {addExpensePressed? <AddExpenseForm /> : null}
    </div>
  );
};

export default Cashflow;

// const handleSubmit = (event) => {
//   event.preventDefault();
//   // Add code here to handle form submission and save the expense to the backend
//   console.log(expense);
// }
