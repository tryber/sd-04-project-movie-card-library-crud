import React from 'react';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      Movie Card Library CRUD
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" component={MovieDetails} />
      </Switch>
    </div>

  );
}

export default App;
