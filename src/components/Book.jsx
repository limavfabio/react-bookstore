import React from 'react';
import PropTypes from 'prop-types';

function Book({ title, author }) {
  return (
    <span>
      {title}
      by
      {author}
    </span>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
