import React from 'react';
import Button from './Button';

function Form() {
  return (
    <div>
        <form id='form'>
            <label htmlFor='date' className='input' > Date: </label>
            <input className='input'/>
            <input className='input' placeholder='Description'/>
            <input className='input' placeholder='Category'/>
            <input className='input'placeholder='Amount'/>
            <Button/>
        </form>
    </div>
  )
}

export default Form