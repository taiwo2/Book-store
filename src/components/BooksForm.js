const BooksForm = () => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState();
  const handleChange = (e) => {
    setTitle(e.current.value)
  }
  return (
    <form>
      <input placeholder="Book Title" onClick={() => handleChange(title)} />
      <select id="category" name="category">
        <option value="" selected>
          Choose category
        </option>
        {categories.forEach((category) => {
          <option value={category}>{category}</option>;
        })}
      </select>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default BooksForm;
