import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MovieList, MovieDetails, EditMovie, NewMovie } from './pages/index';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/movies/:id/edit" component={EditMovie} />
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route exact path="/new" component={NewMovie} />
        <Route exact path="/" component={MovieList} />
      </Switch>
    </div>
  );
}

export default App;
