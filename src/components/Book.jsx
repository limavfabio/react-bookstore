/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import './Book.css';

/* eslint-disable-next-line */
function Book({ title, author, item_id, category }) {
  const dispatch = useDispatch();
  // progress circle
  const [percentage, setPercentage] = useState(0);
  const changeProgress = (e) => {
    if (percentage < 100 && e.target.id === item_id) {
      const progressCircular = document.querySelector(
        `.circular-progress-${item_id}`
      );
      progressCircular.style.background = `conic-gradient(#4395fc ${
        percentage * 3.6
      }deg, #ededed 0deg)`;
      setPercentage(percentage + 1);
    }
  };

  return (
    <div className="bookContainer">
      <div className="bookDetails">
        <span className="bookCategory">{category}</span>
        <h2 className="bookTitle">{title}</h2>
        <span className="bookAuthor">{author}</span>
        <div>
          <span className="bookCommentsLink">Comments</span>
          <button
            className="bookRemoveButton"
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
          <span className="bookEditLink">Edit</span>
        </div>
      </div>
      <div className="completedness">
        <div className={`circular-progress circular-progress-${item_id}`}>
          <span className="progress-value">{`${percentage}%`}</span>
        </div>

        <div className="percentage">
          <span>{`${percentage}%`}</span>
          <span>Completed</span>
        </div>
      </div>
      <div className="progress">
        <span>CURRENT CHAPTER</span>
        <span>Chapter 17</span>
        <button
          className="updateProgressButton"
          type="button"
          onClick={changeProgress}
        >
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  item_id: PropTypes.string.isRequired,
};

export default Book;
