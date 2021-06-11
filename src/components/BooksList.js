import React, { useState } from 'react'
import TableStores from '../reducers/books'
const BooksList = (props) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            {TableStores.map((book,id) => {
                <td key={id}>{book.id}</td>
          })}
          
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default BooksList
