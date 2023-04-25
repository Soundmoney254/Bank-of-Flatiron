function NewTransactionButton({ setTransactions }) {
  
    function handleSubmit(event){
        event.preventDefault()
        const form = document.querySelector("#form");
        let dateValue = document.querySelector("#date").value;
        let descriptionValue = document.querySelector("#description").value;
        let categoryValue = document.querySelector("#category").value;
        let amountValue = Number(document.querySelector("#amount").value)
       
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
             
            })
            .catch((error) => console.log(error));
          form.reset();
          window.location.reload();
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
  export default NewTransactionButton;