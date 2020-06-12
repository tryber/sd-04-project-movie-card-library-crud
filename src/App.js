import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MovieList, NewMovie, EditMovie, MovieDetails } from './pages';

function App() {
  return (
    <div>
      <div>Movie Card Library CRUD</div>
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
