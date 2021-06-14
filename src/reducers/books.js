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
  let res;

  switch (action.type) {
    case CREATE_BOOK:
      res = [...state, action.book];
      break;
    case REMOVE_BOOK:
      res = state
        .slice(
          0,
          state.findIndex((element) => element.bookId === action.book),
        )
        .concat(
          state.slice(
            state.findIndex((element) => element.bookId === action.book) + 1,
            state.length,
          ),
        );
      break;
    default:
      if (localStorage.bookstore) {
        return JSON.parse(localStorage.bookstore);
      }
      localStorage.bookstore = JSON.stringify(state.books);
      return state.books;
  }
  localStorage.bookstore = JSON.stringify(res);
  return res;
};

export { CREATE_BOOK, REMOVE_BOOK };
export default booksReducer;
