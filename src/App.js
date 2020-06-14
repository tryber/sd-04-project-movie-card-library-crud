import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { MovieDetails, MovieList, NewMovie, EditMovie, NotFound } from './pages';
import './App.css';

function App() {
  return (
  <Router>
    <div>Movie Card Library CRUD</div>
    <Link to={'/movies/new'}>ADICIONAR CARTÃO</Link>
    <Switch>
      <Route exact path="/movies/:id/" component={MovieDetails} />
      <Route exact path="/movies/new" component={NewMovie} />
      <Route exact path="/movies/:id/edit" component={EditMovie} />
      <Route exact path="/" component={MovieList} />
      <Route path="/" component={NotFound} />
    </Switch>
  </Router>
  );
}

export default App;
