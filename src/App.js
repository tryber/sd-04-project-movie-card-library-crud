import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movies/new" component={MovieList} />
        <Route exact path="/movies/:id" component={MovieList} />
        <Route exact path="/movies/:id/edit" component={MovieList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
