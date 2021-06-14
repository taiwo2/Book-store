import React from 'react'
import books from './books'
const filter = () => {
  const bookFilter = () => {
    books.filter((book,id,self) => {
      return self.indexOf(book) === id
    })

  }
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>{book.title}
        <button onClick={() => bookFilter(book.id)}>filter</button>
        </div>
      ))

      }
    </div>
  )
}

export default filter;