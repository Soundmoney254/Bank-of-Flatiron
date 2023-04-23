import React from 'react'

function Search() {
  
  function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    const rows = document.querySelectorAll("tbody tr");
    rows.forEach((row) => {
      const category = row.querySelectorAll("td")[2].textContent.toLowerCase();
      if (category.includes(searchTerm) || searchTerm === "") {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  }
      
  return (
    <div><input id='search' onChange={handleSearch} placeholder='Search your Recent Transactions'/></div>
  )

  }
export default Search