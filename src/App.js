import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Switch>
          <Route exact path='/' component={MovieList} />
          <Route exact path='/movies/new' component={NewMovie} />
          <Route exact path='/movies/:id' component={MovieDetails} />
          <Route exact path='/movies/:id/edit' component={EditMovie} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
