import React from 'react';
import { NewTransactionButton } from './TableRows';

function Form({setTransactions}) { 
  return (
    <div>
        <form id='form'>
            <label htmlFor='date' className='input' > Date: </label>
            <input id ='date'
             className='input' 
             required type='date'
             />
            <input id ='description'
            className='input' 
            placeholder='Description' 
            required type='text'
            />
            <input id='category'
            className='input' 
            placeholder='Category'
            required type='text'
            />
            <input id='amount' 
            className='input'
            placeholder='Amount'
            required type='number'
            />
            <NewTransactionButton setTransactions={setTransactions}/>
        </form>
    </div>
  )
}
export default Form