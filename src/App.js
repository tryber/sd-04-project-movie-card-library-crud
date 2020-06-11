import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { MovieList, NewMovie, EditMovie, MovieDetails, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      0,
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movies/new" component={NewMovie} />
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route exact path="/movies/:id/edit" component={EditMovie} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
