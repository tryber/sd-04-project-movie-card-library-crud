import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import {
  MovieList,
  MovieDetails,
  EditMovie,
  NewMovie,
  NotFound,
} from './pages';
import './App.css';
// push do tunico
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <header>
          Movie Library CRUD
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </header>
        <Switch>
          <Route path="/movies/new" component={NewMovie} />
          <Route path="/movies/:id/edit" component={EditMovie} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route exact path="/" component={MovieList} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
