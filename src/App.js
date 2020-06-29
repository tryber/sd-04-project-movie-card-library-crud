import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import MovieList from './pages/MovieList';
import './App.css';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <header>Movie Library CRUD</header>
      <BrowserRouter>
      <Link to="/movies/new" >Adicionar Filme</Link>
        <Switch>
          <Route path="/movies/new" component={NewMovie} />
          <Route path="/movies/:id/edit" component={EditMovie} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/" exact component={MovieList} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
