/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';
import { removeBook } from '../actions/index';

const BooksList = (props) => {
  const { books } = props;
  const handleRemoveBook = ({ bookId }) => {
    const { dispatch } = props;
    dispatch(removeBook(bookId));
  };
  return (
    <table>
      <th>Book ID</th>
      <th>Title</th>
      <th>category</th>
      {books.map((book) => (
        <Book
          key={book.bookId}
          bookId={book.bookId}
          title={book.title}
          category={book.category}
          handleClick={handleRemoveBook}
        />
      ))}
    </table>
  );
};

const mapStateToProps = (state) => ({ books: state.bookReducer });

export default connect(mapStateToProps, null)(BooksList);
