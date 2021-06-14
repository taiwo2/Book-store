/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import circle from '../styles/circle.png';

const Book = ({
  bookId, title, category, handleClick,
}) => (
  <div className="book-item">
    <div className="book-data">
      <p className="category">{category}</p>
      <p className="title">{title}</p>
      <p className="author">Author Name</p>
      <div className="links">
        <button type="button" className="link">
          Comments
        </button>
        <span className="tick" />
        <button
          className="link"
          type="button"
          onClick={() => {
            handleClick({ bookId, title, category });
          }}
        >
          Remove
        </button>
        <span className="tick" />
        <button type="button" className="link">
          Edit
        </button>
      </div>
    </div>
    <div className="reading-progress">
      <img className="oval" alt="circle" src={circle} />
      <div>
        <p className="percent-complete">
          {Math.floor(Math.random() * 100)}
          %
        </p>
        <p className="completed">Completed</p>
      </div>
    </div>
    <div className="line-2" />
    <div className="chapter-info">
      <p className="current-chapter">CURRENT CHAPTER</p>
      <p className="chapter">
        Chapter
        {Math.floor(Math.random() * 20)}
      </p>
      <button type="button" className="update-progress">
        UPDATE CHAPTER
      </button>
    </div>
  </div>
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
