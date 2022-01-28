import './App.css';
import NewAuthorForm from './components/NewAuthorForm';
import AllAuthors from './components/AllAuthors';
import OneAuthor from './components/OneAuthor';
import EditAuthorForm from './components/EditAuthorForm';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import React, {useState} from 'react';

function App() {
let [newAuthorAdded, setNewAuthorAdded] = useState(false);
  return (
    <BrowserRouter>
      <div className='App container'>
        <Switch>
          <Route exact path= '/'>
            <h1>Favorite Authors</h1>
            <Link to='/new' className='btn btn-secondary btn-sm'>Add an Author</Link>
            <hr />
            <AllAuthors newAuthorAdded={newAuthorAdded}></AllAuthors>
          </Route>
          <Route exact path= '/new'>
          <NewAuthorForm newAuthorAdded={newAuthorAdded} setNewAuthorAdded={setNewAuthorAdded}></NewAuthorForm>
          </Route>
          <Route exact path = '/authors/:_id'>
            <OneAuthor></OneAuthor>
          </Route>
          <Route exact path = '/authors/update/:_id'>
            <EditAuthorForm></EditAuthorForm>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;