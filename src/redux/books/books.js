// Actions
const GET_BOOKS = 'bookstore-react/books/GET_BOOKS';
const ADD = 'bookstore-react/books/ADD';
const REMOVE = 'bookstore-react/books/REMOVE';

// Reducer
export default function booksReducer(state = [], action = {}) {
  switch (action.type) {
    case GET_BOOKS:
      return action.payload;
    case ADD:
      return [...state, action.book];
    case REMOVE:
      return state.filter((book) => book.item_id !== action.book.item_id);
    default:
      return state;
  }
}

// Action Creators
export const getBooks = () => async (dispatch) => {
  const booksFetch = await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/z4gzcApO94uwV3qBSQiu/books',
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    }
  ).then((data) => data.json());

  const books = [];
  Object.keys(booksFetch).forEach((e) => {
    books.push({ ...booksFetch[e][0], item_id: e });
  });
  dispatch({
    type: GET_BOOKS,
    payload: books,
  });
};

export const addBook = (book) => async (dispatch) => {
  await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/z4gzcApO94uwV3qBSQiu/books',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: book.item_id,
        title: book.title,
        author: book.author,
        category: book.category,
      }),
    }
  ).then(
    dispatch({
      type: ADD,
      book,
    })
  );
};

export const removeBook = (book) => async (dispatch) => {
  await fetch(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/z4gzcApO94uwV3qBSQiu/books/${book.item_id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  ).then(
    dispatch({
      type: REMOVE,
      book,
    })
  );
};
