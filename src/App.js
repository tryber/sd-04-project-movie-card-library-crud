import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {
  EditMovie,
  MovieList,
  MovieDetails,
  NewMovie,
  NotFound,
} from './pages/index';

function App() {
  return (
    <div>
      <div>Movie Card Library CRUD</div>
      <BrowserRouter>
        <Switch>
          <Route path="/movies/:id/edit" component={EditMovie} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/movies/new" component={NewMovie} />
          <Route exact path="/" component={MovieList} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
