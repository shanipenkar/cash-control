import React, { useState } from "react";

const AddExpense = () => {
 const today = new Date().toISOString('en-GB').slice(0, 10);

  const [expense, setExpense] = useState({
    date: today,
    name: "",
    amount: "",
    category: "",
    description: "",
  });

  const handleChange = (event) => {
    setExpense({
      ...expense,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code here to handle form submission and save the expense to the backend
    console.log(expense);
  };

  return (
    <div className="p-5 m-auto w-30">
      <form
        className="bg-white p-6 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <label className="expense-label">Date:</label>
        <input className="expense-input"
          type="date"
          required
          name="date"
          value={expense.date}
          onChange={handleChange}
        />
        <label className="expense-label">Name:</label>
        <input className="expense-input"
          type="text"
          required
          name="name"
          value={expense.name}
          autoComplete="off"
          onChange={handleChange}
        />
        <label className="expense-label">Amount:</label>
        <input className="expense-input"
          type="number"
          required
          name="amount"
          value={expense.amount}
          onChange={handleChange}
        />
        <label className="expense-label">Category:</label>
        <select className="expense-input"
          type="number"
          required
          name="category"
          value={expense.category}
          onChange={handleChange}
        >
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
        </select>
        <label className="expense-label">Description:</label>
        <textarea className="expense-input"
          name="description"
          value={expense.description}
          onChange={handleChange}
        />
        <button className="btn" type="submit">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpense;
