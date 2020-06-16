import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './pages';
import { MovieList, NotFound, MovieDetails, NewMovie, EditMovie } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/movies/new' component={NewMovie} />
        <Route exact path='/movies/:id/edit' component={EditMovie} />
        <Route exact path='/movies/:id' component={MovieDetails} />
        <Route exact path='/' component={MovieList} />
        <Route path='/' component={NotFound} />
      </Switch>
      <div>Movie Card Library CRUD</div>
    </BrowserRouter>
  );
}

export default App;
