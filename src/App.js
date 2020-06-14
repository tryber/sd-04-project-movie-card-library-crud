import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import { MovieList } from './pages/index';
import './App.css';

import React, { Component } from 'react';
// import { index, movies, NewMovie, EditMovie } from './pages/';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={MovieList} />
          {/* <Route path="/movies/:id" component={movies} />
          <Route path="/movies/new" component={NewMovie} />
          <Route path="/movies/:id/edit" component={EditMovie} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;


