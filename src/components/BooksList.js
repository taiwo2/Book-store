/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import Book from "./Book";

const BooksList = ({ books }) => (
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
      />
    ))}
  </table>
);

const mapStateToProps = (state) => ({ books: state.bookReducer });

export default connect(mapStateToProps, null)(BooksList);
