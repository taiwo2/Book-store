import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import '../styles/index.css';

function App() {
  return (
    <div className="App">
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
