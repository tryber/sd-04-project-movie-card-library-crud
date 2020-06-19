import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route exact path="/movies/:id" component={MovieDetails} />
            <Route exact path="/movies/new" component={NewMovie} />
            <Route exact path="/movies/:id/edit" component={EditMovie} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
