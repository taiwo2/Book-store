const BooksForm = () => {
  const categories = [
    "Action",
    "Biography",
    "History",
    "Horror",
    "Kids",
    "Learning",
    "Sci-Fi",
  ];

  return (
    <form>
      <input placeholder="Book Title" />
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
