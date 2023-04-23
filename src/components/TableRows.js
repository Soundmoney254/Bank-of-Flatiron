import React, { useState, useEffect } from 'react';

function TableRows() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch('http://localhost:8001/transactions');
      const data = await response.json();
      setTransactions(data.reverse());
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {transactions.map((transaction) => (
        <tr key={transaction.id} className='transaction'>
          <td><button className= "deleteButtons">Delete</button>{transaction.date}</td>
          <td>{transaction.description}</td>
          <td>{transaction.category}</td>
          <td>{transaction.amount}</td>
        </tr>
      ))}
    </>
  );
}

export default TableRows;