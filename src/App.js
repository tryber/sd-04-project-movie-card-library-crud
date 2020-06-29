import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { MovieDetails, NewMovie, EditMovie, NotFound, MovieList } from './pages';

function App() {
  return (
      <BrowserRouter>
        <header>
          {/* <Link to="/index">Filmes</Link> */}
          {/* <Link to="/movies/:id">movies</Link> */}
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
          {/* <Link to="/movies/:id/edit">EDIT MOVIE</Link> */}
        </header>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/index" component={MovieList} />
          <Route exact path="/movies/new" component={NewMovie} />
          <Route exact path="/movies/:id" component={MovieDetails} />
          <Route exact path="/movies/:id/edit" component={EditMovie} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
