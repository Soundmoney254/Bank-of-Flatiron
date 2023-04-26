import React, {useEffect, useState} from 'react';

function Table({transactions, handleDelete}) {
  const [tableRows, setTableRows] = useState([]);

  //Receives transactions state as a prop, maps and renders it
  function createRows() {
    if (!transactions) {
      return;
    }
    const allTransactions = transactions.map((transaction) => (
      <tr key={transaction.id}>
        <td>
          <button className="deleteButtons" onClick={() => handleDelete(transaction.id)}>
            Delete
          </button>
          {transaction.date}
        </td>
        <td>{transaction.description}</td>
        <td>{transaction.category}</td>
        <td>{Number(transaction.amount).toFixed(2)}</td>
      </tr>
    ));
    setTableRows(allTransactions);
  }

  useEffect(() => {
    createRows();
  }, [transactions]);

  return (
    <table id='table' className="table table-striped table-hover">
      <thead>
          <tr>
            <th className='tableHeaders'>Date</th>
            <th className='tableHeaders'>Description</th>
            <th className='tableHeaders'>Category</th>
            <th className='tableHeaders'>Amount</th>
        </tr>
      </thead>
      <tbody id='tableBody'>
        {tableRows}
      </tbody>  
    </table>
  );
}
export default Table;