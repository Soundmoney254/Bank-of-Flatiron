import React from 'react';
import TableBody from './TableBody';

function Button() {
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
    
        fetch('http://localhost:8001/transactions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newTransaction),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            return <TableBody newTransaction={data} />;
          })
          .catch((error) => console.log(error));
      form.reset();
    }
  return (
    <>
    <button id='button' type='submit' onClick={handleSubmit}>Add Transaction</button>
    </>
  )
}

export default Button;


        // const tableRow =  <tr key={uuidv4()}>
        // <td>{dateValue}</td>
        // <td>{descriptionValue}</td>
        // <td>{categoryValue}</td>
        // <td>{amountValue}</td>
        // </tr>
        // import { dateValue, descriptionValue, categoryValue, amountValue } from './Form';