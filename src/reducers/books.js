const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

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
    return { books: state.books };
  }
  if (action.type === REMOVE_BOOK) {
    return { books: state.books };
  }
  return state.books;
};

export { CREATE_BOOK, REMOVE_BOOK };
export default booksReducer;
