import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MovieList } from './pages';

function App() {
  return (
    <div>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/new" component={MovieList} />
        <Route path="/movies/:id/edit" component={MovieList} />
        <Route path="/movies/:id" component={MovieList} />
      </Switch>
    </div>
  );
}

export default App;
