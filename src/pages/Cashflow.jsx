import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { TransactionContext } from "../TransactionsContext";
import "../shared/styles.css";

const Cashflow = () => {
  const History = useHistory();
  // const [transactions, setTransactions] = useContext(TransactionsContext);

  // useEffect(() => {
  //   console.log(transactions);
  // }, [transactions]);
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
      <h1 className="flex justify-center font-extrabold text-5xl pb-2 text-[#EEEEEE]">
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
          <p className="text-center text-2xl text-[#EEEEEE]">
            No transactions yet
          </p>
        ) : (
          <table className="table-auto w-full text-center shadow-md">
            <thead className="bg-primary text-white">
              <tr className="text-sm font-medium">
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Type</th>
                <th className="border px-4 py-2">Amount</th>
                <th className="border px-4 py-2">Category</th>
                <th className="border px-4 py-2">Description</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {state.transactions.map((transaction) => (
                <tr key={transaction.id} className="text-sm font-medium">
                  <td className="border px-4 py-2">{transaction.date}</td>
                  <td className="border px-4 py-2">{transaction.name}</td>
                  <td className="border px-4 py-2">{transaction.type}</td>
                  <td className="border px-4 py-2">{transaction.amount}</td>
                  <td className="border px-4 py-2">{transaction.category}</td>
                  <td className="border px-4 py-2">
                    {transaction.description}
                  </td>
                  <td className="border px-4 py-2"></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className=" pt-5 text-center text-2xl text-[#EEEEEE]">
        <p>Total Expenses: {TotalExpenses}</p>
        <p>Total Incomes: {TotalIncomes}</p>
        <p>Balance: {TotalIncomes-TotalExpenses}</p>
        </div>
      </div>
    </div>
  );
};

export default Cashflow;
