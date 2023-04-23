import React, {useState} from 'react'

function Search() {
  
  const [searchTerm, setSearchTerm] = useState("");
  function handleSearch(event) {
    setSearchTerm(event.target.value);
    const rows = document.querySelectorAll("tbody tr");
    rows.forEach((row) => {
      const category = row.querySelectorAll("td")[2].textContent;
      console.log(category)
      if (category.toLowerCase().includes(searchTerm.toLowerCase())) {
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