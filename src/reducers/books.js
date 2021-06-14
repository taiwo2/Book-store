const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const FILTER_BOOK = 'FILTER_BOOK';
const initialState = {
  books: [
    {
      bookId: Math.floor(Math.random() * 20),
      title: 'The Alchemist',
      category: 'History',
    },
    {
      bookId: Math.floor(Math.random() * 20),
      title: 'Into The Wild',
      category: 'Biography',
    },
    {
      bookId: Math.floor(Math.random() * 20),
      title: 'Head First JavaScript Programming',
      category: 'Learning',
    },
  ],
};

const booksReducer = (state = initialState, action) => {
  if (action.type === CREATE_BOOK) {
    return [...state, action.book];
  }
  if (action.type === REMOVE_BOOK) {
    return state.filter((book) => book.bookId !== action.book);
  }
  if (action.type === FILTER_BOOK) {
    return state.filter((book) => book.bookId === action.book)
  }
  return state.books;
};

export { CREATE_BOOK, REMOVE_BOOK };
export default booksReducer;
