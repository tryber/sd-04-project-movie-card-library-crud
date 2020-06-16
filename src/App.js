import React, { Component } from 'react';
// import { index, movies, NewMovie, EditMovie } from './pages/';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { MovieList, MovieDetails, EditMovie } from './pages/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/movies/:id/edit" component={EditMovie} />
          <Route strict path="/movies/:id" component={MovieDetails} />
          {/* <Route path="/movies/new" component={NewMovie} /> */}
          
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
