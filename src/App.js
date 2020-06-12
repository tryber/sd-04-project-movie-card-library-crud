import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import MovieList from './components/MovieList';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route exact path={ROUTES.ROOT} component={MovieList}></Route>
      </Switch>
    </Router>
  );
}

export default App;
