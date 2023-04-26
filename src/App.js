import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Form from './components/Form';
import Table from './components/Table';

function App() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetchData();
    
  }, []);
// A function for fetching data from db.json and passing it to the children components
  async function fetchData() {
    try {
      const response = await fetch('http://localhost:8001/transactions');
      const data = await response.json();
      setTransactions(data.reverse());
    } catch (error) {
      console.log(error);
    }
  }

  //Handler function for delete buttons
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

  function updateTransactions(newTransaction){
      fetch('http://localhost:8001/transactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTransaction),
      })
        .then((response) => response.json())
        .then((postedData) => {
          console.log(postedData.id, postedData.date, postedData.description, postedData.category, postedData.amount)
          setTransactions([postedData, ...transactions])
          console.log(transactions)
        })
        .catch((error) => console.log(error));   
  }

  return (
    <div className="App">
      <Header/>
      <hr/>
      <Search/>
      <hr/>
      <Form updateTransactions = {updateTransactions}  />
      <hr/>
      <Table transactions = {transactions} handleDelete = {handleDelete} />
    </div>
  );
}
export default App;