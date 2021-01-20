import './App.css';
import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewBookPage from '../NewBookPage/NewBookPage';
import AllBooksPage from '../AllBooksPage/AllBooksPage';
import NavBar from '../../components/NavBar/NavBar';


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/books/new">
              <NewBookPage />
            </Route>
            <Route path="/books">
              <AllBooksPage />
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


