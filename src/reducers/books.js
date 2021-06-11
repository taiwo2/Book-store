import React from 'react'
const TableStores = [
  {
    id: 2,
    title: 'hero',
    category: 'books',
  },
  {
    id: 2,
    title: 'hero',
    category: 'books',   
  },
  {
    id: 2,
    title: 'hero',
    category: 'books',
  }
]



const books = (props) => {
  return (
    <div>
      {props.TableStores}
    </div>
  )
}

export default books
