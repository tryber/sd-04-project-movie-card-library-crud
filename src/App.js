import React, { Component } from 'react';
// import { index, movies, NewMovie, EditMovie } from './pages/';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { MovieList, MovieDetails, EditMovie, NewMovie } from './pages/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/movies/:id/edit" component={EditMovie} />
          <Route exact path="/movies/new" component={NewMovie} />
          <Route strict path="/movies/:id" component={MovieDetails} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
