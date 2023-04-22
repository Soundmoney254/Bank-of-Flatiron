import React from 'react';

function Button() {
    function handleSubmit(event){
        event.preventDefault()
    }
  return (
    <>
    <button id='button' type='submit' onClick={handleSubmit}>Add Transaction</button>
    </>
  )
}

export default Button