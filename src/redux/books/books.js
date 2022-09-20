// Actions
const ADD = 'bookstore-react/books/ADD';
const REMOVE = 'bookstore-react/books/REMOVE';
const initialState = [
  {
    title: 'First Book',
    author: 'Second Author',
    id: '1',
  },
  {
    title: 'Second Book',
    author: 'Second Author',
    id: '2',
  },
];

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD:
      return [...state, action.book];
    case REMOVE:
      return state.filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
}

// Action Creators
export const addBook = (book) => ({
  type: ADD,
  book,
});

export const removeBook = (book) => ({
  type: REMOVE,
  book,
});
