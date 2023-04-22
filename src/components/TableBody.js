import React, { useState, useEffect } from 'react';

function TableBody() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8001/transactions');
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <tbody>
        {transactions.map(transaction => (
            <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
            </tr>
        ))}
    </tbody>
  )
}

export default TableBody