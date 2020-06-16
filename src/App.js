import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList.js';
import MovieDetails from './pages/MovieDetails.js';
// import NewMovie from './pages/NewMovie.js';
import EditMovie from './pages/EditMovie.js';
import NotFound from './pages/NotFound.js';
import MovieForm from './components/MovieForm.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>Movie Card Library CRUD</div>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
          <Route path="/movies/new" component={MovieForm} />
          <Route path="/movies/:id/edit" render={(props) => <EditMovie {...props} />} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
