import React, { useContext, useState } from "react";
import { TransactionContext } from "../TransactionsContext";

const TransactionTable = () => {
  const { state, dispatch } = useContext(TransactionContext);
  const [mode, setMode] = useState("default");
  const [selectedTransaction, setSelectedTransaction] = useState({});
  const [TotalExpenses, setTotalExpenses] = useState(0);
  const [TotalIncomes, setTotalIncomes] = useState(0);

  const handleDelete = (transactionId) => {
    console.log(transactionId);
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: transactionId,
    });
    console.log(state);
  };

  const getDefaultCategory = (type) => {
    switch (type) {
      case "income":
        return "salary";
      case "expense":
        return "food";
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
    dispatch({
      type: "UPDATE_TRANSACTION",
      payload: selectedTransaction,
    });
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
      {state.transactions.length === 0 ? (
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
              {state.transactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  // className="text-sm font-medium bg-gray-100"
                  className={
                    mode === "update" &&
                    selectedTransaction.id === transaction.id
                      ? "text-sm font-medium bg-gray-200"
                      : "text-sm font-medium bg-gray-100"
                  }
                >
                  {/* date */}
                  <td className="border-secondary ">
                    {mode === "update" &&
                    selectedTransaction.id === transaction.id ? (
                      <input
                        type="date"
                        name="date"
                        value={selectedTransaction.date}
                        onChange={handleChange}
                        className="trans-update"
                      />
                    ) : (
                      transaction.date
                    )}
                  </td>
                  {/* name */}
                  <td className="border-secondary">
                    {mode === "update" &&
                    selectedTransaction.id === transaction.id ? (
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
                    selectedTransaction.id === transaction.id ? (
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
                    selectedTransaction.id === transaction.id ? (
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
                      selectedTransaction.id === transaction.id &&
                      selectedTransaction.type === "expense" && (
                        <select
                          className="trans-update"
                          type="number"
                          required
                          name="category"
                          value={selectedTransaction.category}
                          onChange={handleChange}
                        >
                          <option value="food">Food</option>
                          <option value="children">Children</option>
                          <option value="rent">Rent</option>
                          <option value="electricity ">Electricity</option>
                          <option value="water">Water</option>
                          <option value="propertyTax">Property Tax</option>
                          <option value="transportation">Transportation</option>
                          <option value="car">Car</option>
                          <option value="medical">Medical</option>
                          <option value="clothing">Clothing</option>
                          <option value="insurance">Insurance</option>
                          <option value="entertainment">Entertainment</option>
                          <option value="cosmetics">Cosmetics</option>
                          <option value="pets">Pets</option>
                          <option value="love">Love</option>
                          <option value="other">Other</option>
                        </select>
                      )}
                    {mode === "update" &&
                      selectedTransaction.id === transaction.id &&
                      selectedTransaction.type === "income" && (
                        <select
                          className="trans-update"
                          type="number"
                          required
                          name="category"
                          value={selectedTransaction.category}
                          onChange={handleChange}
                        >
                          <option value="salary">Salary</option>
                          <option value="side-hustle">Side Hustle</option>
                          <option value="investments">Investments</option>
                          <option value="pension">Pension</option>
                          <option value="scholarship">Scholarship</option>
                          <option value="gift">Gift</option>
                          <option value="other">Other</option>
                        </select>
                      )}
                    {mode === "update" &&
                      selectedTransaction.id !== transaction.id &&
                      transaction.category}
                    {mode !== "update" && transaction.category}
                  </td>
                  {/* description */}
                  <td className="border-secondary">
                    {mode === "update" &&
                    selectedTransaction.id === transaction.id ? (
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
                    selectedTransaction.id === transaction.id ? (
                      <div className="flex justify-center">
                        <button
                          className="text-xs font-medium text-white bg-blue-500 rounded p-1 mr-3 w-5/12"
                          onClick={handleSave}
                        >
                          Save <i class="fa-solid fa-check"></i>
                        </button>
                        <button
                          className="text-xs font-medium text-white bg-red-500 rounded p-1 w-5/12"
                          onClick={() => setMode("default")}
                        >
                          Cancel <i class="fa-solid fa-xmark"></i>
                        </button>
                      </div>
                    ) : (
                      <div className="flex justify-center">
                        <button
                          className="text-xs font-medium text-white bg-blue-500 rounded p-1 mr-3 w-5/12"
                          onClick={() => handleUpdate(transaction)}
                        >
                          Update{" "}
                          <i className="fa fa-pencil" aria-hidden="true"></i>
                        </button>
                        <button
                          className="text-xs font-medium text-white bg-red-500 rounded p-1 w-5/12"
                          onClick={() => handleDelete(transaction.id)}
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
    </div>
  );
};

export default TransactionTable;
