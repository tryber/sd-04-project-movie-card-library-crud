import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from 'react';
import MovieList from './pages/MovieList';
import EditMovie from './pages/EditMovie';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      {/* <div>Movie Card Library CRUDa</div> */}
      <Link to="/movies/new"> Add Card</Link>
      <MovieList />
      <Switch>
        <Route exact path="/" component={MovieList}></Route>
        <Route exact path="/movies/new" component={NewMovie}></Route>
        <Route exact path="movies:id" component={MovieDetails}></Route>
        <Route exact path="movies/:id/edit" component={EditMovie}></Route>
        <Route exact path="/" component={NotFound}></Route>
      </Switch>
    </Router>
  );
}

export default App;
