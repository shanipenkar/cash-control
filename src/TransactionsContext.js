import React, { createContext, useReducer } from 'react';

const initialState = {
  transactions: []
};

export const TransactionContext = createContext(initialState);

const transactionReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      console.log('Adding transaction:', action.payload);
      console.log(state);
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      };
    case 'UPDATE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.map(transaction =>
          transaction.id === action.payload.id
            ? action.payload
            : transaction
        )
      };
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(transactionReducer, initialState);

  return (
    <TransactionContext.Provider value={{ state, dispatch }}>
      {children}
    </TransactionContext.Provider>
  );
};
