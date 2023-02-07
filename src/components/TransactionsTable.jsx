import React, { useState, useLayoutEffect, useEffect } from "react";

import axios from "axios";

const TransactionTable = () => {

  const [mode, setMode] = useState("default");
  const [selectedTransaction, setSelectedTransaction] = useState({});
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalIncomes, setTotalIncomes] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tableUpdated, setTableUpdated] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/transactions/").then((res) => {
      setTransactions(res.data);
      let expenses = 0;
      let incomes = 0;
      res.data.forEach((transaction) => {
        if (transaction.type === "expense") {
          expenses += transaction.amount;
        } else {
          incomes += transaction.amount;
        }
      });
      setTotalExpenses(expenses);
      setTotalIncomes(incomes);
    });

    axios.get("http://localhost:5000/categories/").then((res) => {
      setCategories(res.data);
    });

    setTableUpdated(false);
  }, [tableUpdated]);


  const handleDelete = (transactionId) => {
    console.log(transactionId);
    axios
      .delete("http://localhost:5000/transactions/" + transactionId)
      .then((res) => console.log(res.data));
    setTableUpdated(true);
  };

  const getDefaultCategory = (type) => {
    switch (type) {
      case "income":
        return "Salary";
      case "expense":
        return "Food";
      default:
        return "";
    }
  };

  // after clicking on the edit button
  const handleUpdate = (transaction) => {
    setMode("update");
    setSelectedTransaction(transaction);
  };

  // after clicking on V button to save the changes
  const handleSave = () => {
    axios
      .post(
        "http://localhost:5000/transactions/update/" + selectedTransaction._id,
        selectedTransaction
      )
      .then((res) => {
        console.log("Transaction successfully updated:", res.data);
      });
    setTableUpdated(true);
    setMode("default");
  };

  // while changing the transaction that we want to edit details
  const handleChange = (e) => {
    setSelectedTransaction({
      ...selectedTransaction,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "type") {
      setSelectedTransaction((prevState) => ({
        ...prevState,
        category: getDefaultCategory(e.target.value),
      }));
    }
  };

  return (
    <div className="pt-7">
      {transactions.length === 0 ? (
        <p className="text-center text-3xl text-textColor">
          No transactions yet
        </p>
      ) : (
        <div className="rounded-xl bg-white overflow-auto">
          <table className="justify-center border-secondary table-auto w-full text-center">
            <thead className="bg-transparent text-black">
              <tr className="text-sm font-medium">
                <th className="border-secondary date-cell">Date</th>
                <th className="border-secondary name-cell">Name</th>
                <th className="border-secondary other-cell">Type</th>
                <th className="border-secondary other-cell">Amount</th>
                <th className="border-secondary other-cell">Category</th>
                <th className="border-secondary other-cell">Description</th>
                <th className="border-secondary other-cell">Actions</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr
                  key={transaction._id}
                  // className="text-sm font-medium bg-gray-100"
                  className={
                    mode === "update" &&
                    selectedTransaction._id === transaction._id
                      ? "text-sm font-medium bg-gray-200"
                      : "text-sm font-medium bg-gray-100"
                  }
                >
                  {/* date */}
                  <td className="border-secondary ">
                    {mode === "update" &&
                    selectedTransaction._id === transaction._id ? (
                      <input
                        type="date"
                        name="date"
                        value={selectedTransaction.date}
                        onChange={handleChange}
                        className="trans-update"
                      />
                    ) : (
                      new Date(transaction.date).toLocaleDateString()
                    )}
                  </td>
                  {/* name */}
                  <td className="border-secondary">
                    {mode === "update" &&
                    selectedTransaction._id === transaction._id ? (
                      <input
                        type="text"
                        name="name"
                        value={selectedTransaction.name}
                        onChange={handleChange}
                        className="trans-update"
                      />
                    ) : (
                      transaction.name
                    )}
                  </td>

                  {/* type */}
                  <td className="border-secondary">
                    {/* {transaction.type} */}
                    {mode === "update" &&
                    selectedTransaction._id === transaction._id ? (
                      <select
                        name="type"
                        value={selectedTransaction.type}
                        onChange={handleChange}
                        className="trans-update"
                      >
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                      </select>
                    ) : (
                      transaction.type
                    )}
                  </td>

                  {/* amount */}
                  <td className="border-secondary">
                    {mode === "update" &&
                    selectedTransaction._id === transaction._id ? (
                      <input
                        type="number"
                        name="amount"
                        value={selectedTransaction.amount}
                        onChange={handleChange}
                        className="trans-update"
                      />
                    ) : (
                      transaction.amount
                    )}
                  </td>

                  {/* category */}
                  <td className="border-secondary">
                    {mode === "update" &&
                      selectedTransaction._id === transaction._id &&
                      selectedTransaction.type === "expense" && (
                        <select
                          className="trans-update"
                          type="number"
                          required
                          name="category"
                          value={selectedTransaction.category}
                          onChange={handleChange}
                        >
                          {categories[0].map((category) => (
                            <option>{category}</option>
                          ))}
                        </select>
                      )}
                    {mode === "update" &&
                      selectedTransaction._id === transaction._id &&
                      selectedTransaction.type === "income" && (
                        <select
                          className="trans-update"
                          type="number"
                          required
                          name="category"
                          value={selectedTransaction.category}
                          onChange={handleChange}
                        >
                          {categories[1].map((category) => (
                            <option>{category}</option>
                          ))}
                        </select>
                      )}
                    {mode === "update" &&
                      selectedTransaction._id !== transaction._id &&
                      transaction.category}
                    {mode !== "update" && transaction.category}
                  </td>
                  {/* description */}
                  <td className="border-secondary">
                    {mode === "update" &&
                    selectedTransaction._id === transaction._id ? (
                      <textarea
                        type="text"
                        name="description"
                        value={selectedTransaction.description}
                        onChange={handleChange}
                        className="trans-update"
                        maxLength="200"
                      />
                    ) : (
                      transaction.description
                    )}
                  </td>
                  {/* actions */}
                  <td className="border-secondary w-1/4">
                    {mode === "update" &&
                    selectedTransaction._id === transaction._id ? (
                      <div className="flex justify-center">
                        <button
                          className="text-xs font-medium text-white bg-blue-500 rounded p-1 mr-3 w-5/12"
                          onClick={handleSave}
                        >
                          Save <i className="fa-solid fa-check"></i>
                        </button>
                        <button
                          className="text-xs font-medium text-white bg-red-500 rounded p-1 w-5/12"
                          onClick={() => setMode("default")}
                        >
                          Cancel <i className="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    ) : (
                      <div className="flex justify-center">
                        <button
                          className="text-xs font-medium text-white bg-blue-500 rounded p-1 mr-3 w-5/12"
                          onClick={() => handleUpdate(transaction)}
                        >
                          {" "}
                          Update{" "}
                          <i className="fa fa-pencil" aria-hidden="true"></i>
                        </button>
                        <button
                          className="text-xs font-medium text-white bg-red-500 rounded p-1 w-5/12"
                          onClick={() => handleDelete(transaction._id)}
                        >
                          Delete{" "}
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className=" pt-5 text-center text-xl text-textColor">
        <p>Total Expenses: {totalExpenses}</p>
        <p>Total Incomes: {totalIncomes}</p>
        <p>Balance: {totalIncomes - totalExpenses}</p>
      </div>
    </div>
  );
};

export default TransactionTable;
