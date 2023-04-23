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

  async function handleDelete(id) {
    const confirmed = window.confirm('Are you sure you want to delete this transaction?');
    if (confirmed) {
      try {
        await fetch(`http://localhost:8001/transactions/${id}`, {
          method: 'DELETE',
        });
        setTransactions((prevState) =>
          prevState.filter((transaction) => transaction.id !== id)
        );
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <>
      {transactions.map((transaction) => (
        <tr key={transaction.id}>
          <td><button className= "deleteButtons" onClick={() => handleDelete(transaction.id)}>Delete</button>{transaction.date}</td>
          <td>{transaction.description}</td>
          <td>{transaction.category}</td>
          <td>{transaction.amount}</td>
        </tr>
      ))}
    </>
  );
}

export default TableRows;