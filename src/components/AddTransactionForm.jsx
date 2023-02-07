import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
// import { TransactionContext } from "../TransactionsContext";
import axios from "axios";

const AddTransactionForm = ({ type }) => {
  const backendDir = process.env.BACKEND_DIR;
  const history = useHistory();
  const [categories, setCategories] = useState([]);

  // const { state, dispatch } = useContext(TransactionContext);
  const today = new Date().toISOString("en-GB").slice(0, 10);
  const [transaction, setTransaction] = useState({
    date: today,
    name: "",
    amount: 0,
    category: type==="expense"?"Food":"Salary",
    description: "",
    type: type,
  });

  useEffect(() => {
    axios.get("http://localhost:5000/categories/" + type)
    .then(res => {
      if(res.data.length > 0) {
        setCategories(res.data)
      }
    })
    .catch(error => {
      console.error("Error fetching categories:", error);
  });
  }, []);


  const handleChange = (e) => {
    setTransaction({
      ...transaction,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(transaction);
    // const newTransaction = {
    //   date: transaction.date,
    //   name: transaction.name,
    //   amount: transaction.amount,
    //   category: transaction.category,
    //   description: transaction.description,
    //   type: transaction.type,
    // };
    // console.log(newTransaction);
    
    axios.post("http://localhost:5000/transactions/add", transaction)
    .then(res => console.log("Transaction successfully posted:", res.data))
    history.push("/cashflow");


    // dispatch({
    //   type: "ADD_TRANSACTION",
    //   payload: transaction,
    // });
    // console.log(state);
    // history.push("/cashflow");
    // })
    // .catch(error => {
    //   console.error("Error posting transaction:", error);
    // });
  };

  return (
    <div className="p-5">
      <form
        className="bg-white p-3 justify-center rounded-lg shadow-md w-1/2 mx-auto"
        onSubmit={handleSubmit}
      >
        <label className="trans-label">Date:</label>
        <input
          className="trans-input border-secondary"
          type="date"
          required
          name="date"
          value={transaction.date}
          onChange={handleChange}
        />
        <label className="trans-label">Name:</label>
        <input
          className="trans-input border-secondary"
          type="text"
          required
          name="name"
          value={transaction.name}
          autoComplete="off"
          onChange={handleChange}
        />
        <label className="trans-label">Amount:</label>
        <input
          className="trans-input border-secondary"
          type="number"
          required
          name="amount"
          value={transaction.amount}
          onChange={handleChange}
        />
        <label className="trans-label ">Category:</label>
        <select
          className="trans-input border-secondary"
          type="number"
          required
          name="category"
          value={transaction.category}
          onChange={handleChange}
        >
        {categories.map((category) => 
          <option>{category}</option>
        )}
        </select>
        <label className="trans-label">Description:</label>
        <textarea
          maxLength="200"
          className="trans-input border-secondary"
          name="description"
          value={transaction.description}
          onChange={handleChange}
        />
        <div className="flex justify-around">
          <button
            className="btn capitalize w-2/5  bg-red-500 text-white"
            onClick={() => {
              history.push("/cashflow");
            }}
          >
            Back
          </button>
          <button
            className="btn capitalize w-2/5 bg-blue-500 text-white"
            type="submit"
          >
            Add {type}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTransactionForm;
