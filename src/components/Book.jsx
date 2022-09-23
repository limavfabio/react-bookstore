import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

/* eslint-disable-next-line */
function Book({ title, author, item_id, category }) {
  const dispatch = useDispatch();

  return (
    <>
      <span>
        {title}
        <span> by </span>
        {author}
      </span>
      <span>
        Category:
        {category}
      </span>
      <button
        type="button"
        onClick={() => {
          dispatch(
            removeBook({
              item_id,
            })
          );
        }}
      >
        Remove
      </button>
    </>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  item_id: PropTypes.string.isRequired,
};

export default Book;
