import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { TransactionContext } from "../TransactionsContext";

const AddTransactionForm = ({type}) => {
  const history = useHistory();
  
  const { state, dispatch } = useContext(TransactionContext);

 const today = new Date().toISOString('en-GB').slice(0, 10);
  const [transaction, setTransaction] = useState({
    id:"",
    date: today,
    name: "",
    amount: "",
    category: "",
    description: "",
    type: type
  });

  const handleChange = (event) => {
    setTransaction({
      ...transaction,
      [event.target.name]: event.target.value,
    });
  };
  

  const handleSubmit = (transactionToAdd) => {
    transactionToAdd.id = Date.now();
    console.log(transactionToAdd);
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transactionToAdd
    })
    console.log(state);
    history.push("/cashflow");
  };


  return (
    <div className="p-5">
      <form
        className="bg-white p-3 justify-center rounded-lg shadow-md w-1/2 mx-auto"
        onSubmit= {()=>handleSubmit(transaction)}
      >
        <label className="trans-label">Date:</label>
        <input className="trans-input border-secondary"
          type="date"
          required
          name="date"
          value={transaction.date}
          onChange={handleChange}
        />
        <label className="trans-label">Name:</label>
        <input className="trans-input border-secondary"
          type="text"
          required
          name="name"
          value={transaction.name}
          autoComplete="off"
          onChange={handleChange}
        />
       <label className="trans-label">Amount:</label>
        <input className="trans-input border-secondary"
          type="number"
          required
          name="amount"
          value={transaction.amount}
          onChange={handleChange}
        /> 
       <label className="trans-label ">Category:</label>
        <select className="trans-input border-secondary"
          type="number"
          required
          name="category"
          value={transaction.category}
          onChange={handleChange}
        >
          {type==="expense" && 
          <>
          <option value="food">Food</option>
          <option value="children">Children</option>
          <option value="rent">Rent</option>
          <option value="transportation">Transportation</option>
          <option value="car">Car</option>
          <option value="medical">Medical</option>
          <option value="clothing">Clothing</option>
          <option value="insurance">Insurance</option>
          <option value="entertainment">Entertainment</option>
          <option value="cosmetics">Cosmetics</option>
          <option value="love">Love</option>
          <option value="other">Other</option>
          </>}
          {type==="income" && <>
          <option value="salary">Salary</option>
          <option value="side-hustle">Side Hustle</option>
          <option value="investments">Investments</option>
          <option value="pension">Pension</option>
          <option value="car">Car</option>
          <option value="scholarship">Scholarship</option>
          <option value="gift">Gift</option>
          <option value="other">Other</option>
          </>}
        </select>
        <label className="trans-label">Description:</label>
        <textarea className="trans-input border-secondary"
          name="description"
          value={transaction.description}
          onChange={handleChange}
        />
        <button className="btn capitalize" type="submit">
          Add {type}
        </button>
      </form>
    </div>
  );
};

export default AddTransactionForm;
