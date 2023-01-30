import React, { useContext, useEffect } from "react";
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

  useEffect(() => {
    // This function is called whenever transactions change
    console.log('useEffect activated:', state);
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
      <div>
        <h1>Transactions</h1>
        {state.transactions.map((transaction) => (
          <div key={transaction.id}>
            <h1 className="text-black">name: {transaction.name}</h1>
            <h2 className="text-black">id: {transaction.id}</h2>
            <h2 className="text-black">amount: {transaction.amount}</h2>
            <h2 className="text-black">type: {transaction.type}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cashflow;
