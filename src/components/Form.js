import React, {useState} from 'react';

function Form({updateTransactions}) { 
  const [newTransaction, setNewTransaction] = useState({
    date: "",
    description: "",
    category: "", 
    amount:"",
  });

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    
    setNewTransaction({
      ...newTransaction,
      [name]: value,
    });
  }

  return (
    <div>
        <form id='form' onSubmit={(event) => updateTransactions(newTransaction, event)}>
            <label htmlFor='date' className='input' > Date: </label>
            <input id ='date'
             className='input' 
             required type='date'
             name = "date"
             value={newTransaction.date}
             onChange={handleChange}
             />
            <input id ='description'
            className='input' 
            placeholder='Description' 
            required type='text'
            name = "description"
            value={newTransaction.description}
            onChange={handleChange}
            />
            <input id='category'
            className='input' 
            placeholder='Category'
            required type='text'
            name = "category"
            value={newTransaction.category}
            onChange={handleChange}
            />
            <input id='amount' 
            className='input'
            placeholder='Amount'
            required type='number'
            name='amount'
            value={newTransaction.amount}
            onChange={handleChange}
            />
            <button id='addButton' type='submit'>Add Transaction</button>
        </form>
    </div>
  )
}
export default Form