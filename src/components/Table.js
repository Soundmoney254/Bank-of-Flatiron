import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

function Table() {
  return (
   <table id='table' class="table table-striped table-hover">
    <TableHeader/>
    <TableBody/>
   </table>
  )
}

export default Table;