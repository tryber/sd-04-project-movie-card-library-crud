import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MovieDetails, MovieList, NewMovie, EditMovie, NotFound } from './pages';
import './App.css';

function App() {
  return (
  <div>
    Movie Card Library CRUD
    <Switch>
      <Route path="/movies/:id" component={MovieDetails} />
      <Route path="/movies/new" component={NewMovie} />
      <Route path="/movies/:id/edit" component={EditMovie} />
      <Route exact path="/" component={MovieList} />
      <Route component={NotFound} />
    </Switch>
  </div>
  );
}

export default App;
