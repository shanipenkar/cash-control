import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { LoginContext } from "../LoginContext";

const AddTransactionForm = ({ type }) => {

  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const {loggedUser, setLoggedUser} = useContext(LoginContext);
  const today = new Date().toISOString("en-GB").slice(0, 10);
  const [transaction, setTransaction] = useState({
    date: today,
    name: "",
    amount: 0,
    category: type==="expense"?"Food":"Salary",
    description: "",
    type: type,
    userId: loggedUser.id,
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
    console.log(loggedUser);
    console.log(transaction);
    axios.post("http://localhost:5000/transactions/add", {loggedUser, ...transaction})
    .then(res => console.log(res.data))
    history.push("/cashflow");
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
          <option key={category}>{category}</option>
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
