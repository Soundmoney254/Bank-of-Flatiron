import React, {useState} from 'react';
import TableBody from './TableBody';


function Button() {
  const [newTransaction, setNewTransaction] = useState(null);

    function handleSubmit(event){
        event.preventDefault()
        // const form = document.querySelector("#form");
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
              setNewTransaction(data);
            })
            .catch((error) => console.log(error));
          // form.reset();
        }else {
          alert("Make sure to add a value to all inputs")
        }
    }
  return (
    <>
    <button id='addButton' type='submit' onClick={handleSubmit}>Add Transaction</button>
    </>
  )
}
export default Button;