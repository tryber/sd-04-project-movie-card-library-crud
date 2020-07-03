import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie } from './pages';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/movies/:id" component={MovieDetails} />
          <Route exact path="/movies/:id/edit" component={EditMovie} />
          <Route exact path="/movies/new" component={NewMovie} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
