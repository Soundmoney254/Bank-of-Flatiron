import React, {useState, useEffect} from 'react';

function Form({updateTransactions}) { 
  const [newTransaction, setNewTransaction] = useState({
    date: "",
    description: "",
    category: "", 
    amount:"",
  });

  const [resetForm, setResetForm] = useState(false);

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    
    setNewTransaction({
      ...newTransaction,
      [name]: value,
    });
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    updateTransactions(newTransaction);
    setResetForm(true);
  }

  useEffect(() => {
    handleReset();
  }, [resetForm]);

  function handleReset() {
    setNewTransaction({
      date: '',
      description: '',
      category: '',
      amount: '',
    });
    setResetForm(false);
  }
  return (
    <div>
        <form id='inputForm' 
        onSubmit={event => handleSubmit(event)}>
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