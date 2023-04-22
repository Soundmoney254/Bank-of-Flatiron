import React from 'react'

function Form() {
  return (
    <div>
        <form id='form'>
            <label htmlFor='date' className='input' > Date: </label>
            <input className='input'/>
            <input className='input' placeholder='Description'/>
            <input className='input' placeholder='Category'/>
            <input className='input'placeholder='Amount'/>
        </form>
    </div>
  )
}

export default Form