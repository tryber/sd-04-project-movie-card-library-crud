import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import MovieList from './components/MovieList';
import MovieDeatils from './components/MovieDetails';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route exact path={ROUTES.ROOT} component={MovieList}></Route>
        <Route exact path={ROUTES.GET_MOVIE} component={MovieDeatils}></Route>
      </Switch>
    </Router>
  );
}

export default App;
