/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

const Book = ({
  bookId, title, category, handleClick,
}) => (
  <tr>
    <td>{bookId}</td>
    <td>{title}</td>
    <td>{category}</td>
    <td>
      <button
        type="button"
        onClick={() => {
          handleClick({ bookId, title, category });
        }}
      >
        Remove Book
      </button>
    </td>
  </tr>
);

Book.propTypes = {
  handleClick: PropTypes.func,
  book: PropTypes.shape({
    bookId: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }),
};
Book.defaultProps = {
  book: null,
  handleClick: null,
};

export default Book;
