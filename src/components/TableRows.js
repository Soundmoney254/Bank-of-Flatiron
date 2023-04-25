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
      <newTransactionButton setTransactions={setTransactions} />
    </>
  );
}

function NewTransactionButton({ setTransactions }) {
  
  function handleSubmit(event){
      event.preventDefault()
      const form = document.querySelector("#form");
      const dateValue = document.querySelector("#date").value;
      const descriptionValue = document.querySelector("#description").value;
      const categoryValue = document.querySelector("#category").value;
      const amountValue = document.querySelector("#amount").value;
      const newTransaction = {
        date: dateValue,
        description: descriptionValue,
        category: categoryValue, 
        amount: amountValue,
      };
      if(dateValue && descriptionValue && categoryValue && amountValue){
        fetch('http://localhost:8001/transactions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newTransaction),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data.date, data.description, data.category, data.amount)
            setTransactions((prevState) => [...prevState, data]);
           
          })
          .catch((error) => console.log(error));
        form.reset();
      }else {
        alert("Make sure to add a value to all inputs")
      }
  }
return (
  <>
  <button id='addButton' type='submit' onSubmit={handleSubmit}>Add Transaction</button>
  </>
)
}
export {NewTransactionButton};
export default TableRows;
