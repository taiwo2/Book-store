import React from 'react'
import books from './books'
const filter = () => {
  return (
    <div>
      {books.filter((book,id,self) => (
        <div key={book.id}>{self.indexOf(book) === id}
        <button onClick={() => bookFilter()}>filter</button>
        </div>
      ))

      }
    </div>
  )
}