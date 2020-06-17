import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieList, EditMovie, MovieDetails, NewMovie, NotFound } from './pages/index';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/movies/:id/edit" component={EditMovie} />
          <Route exact path="/movies/new" component={NewMovie} />
          <Route exact path="/movies/:id" component={MovieDetails} />
          <Route path="/" component={NotFound} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
