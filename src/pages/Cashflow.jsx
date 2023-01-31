import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { TransactionContext } from "../TransactionsContext";
import "../shared/styles.css";

const Cashflow = () => {
  const History = useHistory();

  const { state, dispatch } = useContext(TransactionContext);
  const [TotalExpenses, setTotalExpenses] = useState(0);
  const [TotalIncomes, setTotalIncomes] = useState(0);

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

  const onAddExpensePress = () => {
    History.push({
      pathname: "/addtransaction",
      state: { transactionType: "expense" },
    });
  };

  const onAddIncomePress = () => {
    History.push({
      pathname: "/addtransaction",
      state: { transactionType: "income" },
    });
  };

  return (
    <div className="px-6 py-10">
      <h1 className="flex justify-center font-extrabold text-5xl pb-2 text-light">
        Cash Flow
      </h1>
      <div className="pt-3 flex justify-center">
        <button className="btn hover:bg-primary" onClick={onAddExpensePress}>
          Add Expense
        </button>
        <button className="btn hover:bg-primary" onClick={onAddIncomePress}>
          Add Income
        </button>
      </div>

      <div className="pt-7">
        {state.transactions.length === 0 ? (
          <p className="text-center text-3xl text-light">
            No transactions yet
          </p>
        ) : (
          <div className="rounded-xl bg-white overflow-hidden">
          <table className="justify-center border-secondary table-auto w-full text-center">
            <thead className="bg-transparent text-black">
              <tr className="text-sm font-medium">
                <th className="border-secondary">Date</th>
                <th className="border-secondary">Name</th>
                <th className="border-secondary">Type</th>
                <th className="border-secondary">Amount</th>
                <th className="border-secondary">Category</th>
                <th className="border-secondary">Description</th>
                <th className="border-secondary">Actions</th>
              </tr>
            </thead>
            <tbody>
              {state.transactions.map((transaction) => (
                <tr key={transaction.id} className="text-sm font-medium bg-gray-100">
                  <td className="border-secondary">{transaction.date}</td>
                  <td className="border-secondary">{transaction.name}</td>
                  <td className="border-secondary">{transaction.type}</td>
                  <td className="border-secondary">{transaction.amount}</td>
                  <td className="border-secondary">{transaction.category}</td>
                  <td className="border-secondary">
                    {transaction.description}
                  </td>
                  <td className="border-secondary"></td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        )}
        <div className=" pt-5 text-center text-xl text-light">
        <p>Total Expenses: {TotalExpenses}</p>
        <p>Total Incomes: {TotalIncomes}</p>
        <p>Balance: {TotalIncomes-TotalExpenses}</p>
        </div>
      </div>
    </div>
  );
};

export default Cashflow;
