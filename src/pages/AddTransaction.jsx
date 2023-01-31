import React from 'react';
import AddTransactionForm from '../components/AddTransactionForm';
import { useLocation } from 'react-router-dom';

const AddTransaction = () => {
  const location = useLocation();
  const type = location.state.transactionType;
  
  return (
    <div className='px-6 py-10'>
    <h1 className="capitalize flex justify-center font-extrabold text-5xl pb-2 text-[#EEEEEE]">Add {type}</h1>
    <AddTransactionForm type={type}/>
    </div>
  )
};

export default AddTransaction;