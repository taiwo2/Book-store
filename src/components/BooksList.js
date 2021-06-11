import React, { useState } from 'react'
import TableStores from '../reducers/books'
const BooksList = (props) => {
  return (
    <div>
      <table>
        <tbody>
            {TableStores.map((book,id) => {
              <tr>
                <td key={id}>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.category}</td>
              </tr>
          })} 
        </tbody>
      </table>
    </div>
  )
}

export default BooksList
