import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
