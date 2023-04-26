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
  return (
    <div className="App">
      <Header/>
      <hr/>
      <Search/>
      <hr/>
      <Form/>
      <hr/>
      <Table transactions={transactions} handleDelete ={handleDelete} />
    </div>
  );
}

export default App;
