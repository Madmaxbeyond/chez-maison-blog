import './App.css';
import { useState } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as booksAPI from '../../utilities/books-api';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import NewBookPage from '../NewBookPage/NewBookPage';
import AllBooksPage from '../AllBooksPage/AllBooksPage';
import BookDetailPage from '../BookDetailPage/BookDetailPage';
import EditBookPage from '../EditBookPage/EditBookPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [books, setBooks] = useState([]);
  const history = useHistory();

  async function handleAddBook(newBookData) {
    const newBook = await booksAPI.add(newBookData);
    setBooks([...books, newBook]);
    history.push('/books');
  }

  async function handleUpdateBook(updatedBookData) {
    const updatedBook = await booksAPI.update(updatedBookData);
    const newBookArray = books.map(book => {
      return book._id === updatedBook._id ? updatedBook : book
    })
    setBooks(newBookArray);
    history.push('/books');
  }

  async function handleDeleteBook(bookId) {
    await booksAPI.deleteOne(bookId);
    setBooks(books.filter(book => book._id !== bookId));
    history.push('/books');
  }

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route exact path="/books">
              <AllBooksPage books={books} />
            </Route>

            <Route exact path="/books/new">
              <NewBookPage handleAddBook={handleAddBook} />
            </Route>
            
            <Route exact path="/books/edit">
              <EditBookPage 
                handleUpdateBook={handleUpdateBook}
              />
            </Route>

            <Route exact path="/books/details">
              <BookDetailPage 
                books={books}
                setBooks={setBooks}
                handleDeleteBook={handleDeleteBook} 
              />
            </Route>
            <Redirect to="/books" />  
          </Switch>
        </>    
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}


