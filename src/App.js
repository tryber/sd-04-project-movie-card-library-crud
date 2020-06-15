import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Movielist from './pages/MovieList';
import EditMovie from './pages/EditMovie';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ Movielist } />
        <Route path="/movies/new" component={ NewMovie } />
      </Switch>    
    </BrowserRouter>
  );
}

export default App;
