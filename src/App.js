import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MovieList />
        </Route>
        <Route path="/movies/new">
          <NewMovie />
        </Route>
        <Route path="/movies/:id">
          <MovieDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
