import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MovieList, MovieDetails, EditMovie, NewMovie } from './pages/index';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/" component={MovieList} />
      </Switch>
    </div>
  );
}

export default App;
