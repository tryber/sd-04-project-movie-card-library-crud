import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import './App.css';


function App() {
  return (
      <BrowserRouter>
        <div className="page-title">Movie Card Library CRUD</div>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/movies/new" component={NewMovie} />
          <Route path="/movies/:id/edit" component={EditMovie} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
