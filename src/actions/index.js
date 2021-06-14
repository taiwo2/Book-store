import { CREATE_BOOK, REMOVE_BOOK } from '../reducers/books';
import { CHANGE_FILTER } from '../reducers/filter';

const createBook = (book) => ({
  type: CREATE_BOOK,
  book: {
    bookId: Math.floor(Math.random() * 20),
    title: book.title,
    category: book.category,
  },
});

const removeBook = (book) => ({
  type: REMOVE_BOOK,
  book,
});

const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  filter,
});

export { createBook, removeBook, changeFilter };
