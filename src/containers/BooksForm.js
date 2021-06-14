import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
    };
    this.handleChange.bind(this);
    this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    if (e.target.id === 'book-title') {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.id === 'book-category') {
      this.setState({
        category: e.target.value,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(createBook(this.state));
    this.setState({
      title: '',
      category: '',
    });
  };

  render() {
    const categories = [
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
    ];
    const { title, category } = this.state;
    return (
      <div className="book-form">
        <form>
          <input
            type="text"
            id="book-title"
            name="book-title"
            className="book-title"
            onChange={this.handleChange}
            value={title}
            placeholder="Book Title"
          />
          <select
            onChange={this.handleChange}
            value={category}
            id="book-category"
            className="book-category"
          >
            <option value="">Select a category:</option>
            {categories.map((cat) => (
              <option cat={cat} key={cat}>
                {cat}
              </option>
            ))}
          </select>
          <input
            type="submit"
            className="book-submit"
            value="Submit"
            onClick={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}

BooksForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
export default connect(null)(BooksForm);
