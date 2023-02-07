import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const transactionsResponse = await axios.get('http://localhost:5000/transactions');
        setTransactions(transactionsResponse.data);

        const categoriesResponse = await axios.get('http://localhost:5000/categories');
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ transactions, setTransactions, categories, setCategories }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;