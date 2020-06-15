import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie } from './pages/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MovieList} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id/edit" component={EditMovie} />
      </Switch>
    </Router>
  );
}

export default App;
