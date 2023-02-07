import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "../shared/styles.css";
import TransactionTable from "../components/TransactionsTable";

const Cashflow = () => {
  const history = useHistory();

  const onAddExpensePress = () => {
    history.push({
      pathname: "/addtransaction",
      state: { transactionType: "expense" },
    });
  };

  const onAddIncomePress = () => {
    history.push({
      pathname: "/addtransaction",
      state: { transactionType: "income" },
    });
  };

  return (
    <div className="px-6 py-10">
      <h1 className="flex justify-center font-extrabold text-5xl pb-2 text-white">
        Cash Flow
      </h1>
      <div className="py-4 flex justify-center">
        <button
          className="btn bg-black text-white hover:bg-red-500 hover:text-black"
          onClick={onAddExpensePress}
        >
          <i className="fa-solid fa-plus pr-2"></i>Add Expense 
        </button>
        <button
          className="btn bg-black text-white hover:bg-blue-500 hover:text-black"
          onClick={onAddIncomePress}
        >
          <i className="fa-solid fa-plus pr-2"></i>Add Income
        </button>
      </div>
      <TransactionTable />
      
    </div>
  );
};

export default Cashflow;
