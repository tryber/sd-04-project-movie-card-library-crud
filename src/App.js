import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';

function App() {
  return (
    <Router>
      {/* <div>Movie Card Library CRUD</div>
      <MovieList /> */}
      <Switch>
        <Route exact path="/movies/new" component={NewMovie} />
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route exact path="/movies/:id/edit" component={EditMovie} />
        <Route exact path="/" component={MovieList} />
      </Switch>
    </Router>
  );
}

export default App;
