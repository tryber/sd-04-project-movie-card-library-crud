import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';


function App() {
  return (
      <BrowserRouter>
        <div>Movie Card Library CRUD</div>
        <Switch>
          <Route exact path="/" component={MovieList}></Route>
          <Route path="/movie/:id" component={MovieDetails}></Route>
          <Route path="/movie/new" component={NewMovie}></Route>
          <Route path="/movie/:id/edit" component={EditMovie}></Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
