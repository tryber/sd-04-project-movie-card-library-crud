import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  MovieList, MovieDetails, EditMovie, NewMovie,
} from './pages';

function App() {
  return (
    <div>
      Movie Card Library CRUD
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route path="/movies/:id" component={MovieDetails} />
      </Switch>
    </div>
  );
}

export default App;
