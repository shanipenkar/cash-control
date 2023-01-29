import React from 'react';
import AddExpenseForm from '../components/AddExpenseForm';
import { useHistory } from 'react-router-dom';

const AddTransaction = () => {
  
  return (
    <div>
    <h1>Add Transaction</h1>
    <AddExpenseForm/>
    </div>
  )
};

export default AddTransaction;