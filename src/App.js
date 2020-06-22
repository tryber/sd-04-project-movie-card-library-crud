import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './component/MovieList';
import EditMovie from './component/EditMovie';
import MovieDetails from './component/MovieDetails';
import NewMovie from './component/NewMovie';
import NotFound from './component/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movies/new" component={NewMovie} />
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route exact path="/movies/:id/edit" component={EditMovie} />
        <Route path="/" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
