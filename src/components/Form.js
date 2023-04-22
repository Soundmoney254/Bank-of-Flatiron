import React from 'react'

function Form() {
  return (
    <div>
        <form>
            <label htmlFor='date' className='input' > Date: </label>
            <input className='input'/>
            <input className='input'/>
            <input className='input'/>
            <input className='input'/>
        </form>
    </div>
  )
}

export default Form