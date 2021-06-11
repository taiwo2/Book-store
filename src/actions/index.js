import { CREATE_BOOK, REMOVE_BOOK } from '../reducers/books';

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

export { createBook, removeBook };
