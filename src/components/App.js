import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <BooksList />
        <BooksForm />
      </div>
    </div>
  );
}

export default App;
