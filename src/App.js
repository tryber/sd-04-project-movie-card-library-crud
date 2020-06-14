import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
// import MovieList from './components/MovieList';
// import MovieDeatils from './components/MovieDetails';
import { MovieList, MovieDetails, EditMovie, NewMovie, NotFound } from './pages';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route exact path={ROUTES.ROOT} component={MovieList} />
        <Route exact path={ROUTES.NEW_MOVIE} component={NewMovie} />
        <Route exact path={ROUTES.GET_MOVIE} component={MovieDetails} />
        <Route exact path={ROUTES.UPDATE_MOVIE} component={EditMovie} />
        <Route exact path={ROUTES.OTHERS} component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
