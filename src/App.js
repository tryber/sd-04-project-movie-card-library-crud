import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { NotFound, MovieList, NewMovie, EditMovie, MovieDetails } from './pages';

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>Movie Card Library CRUD</h1>
          <Link to="/movies/new">Adicionar Cartão</Link>
        </header>
        <main>
          <Switch>
            <Route component={NotFound} />
            <Route path="/" component={MovieList} />
            <Route exact path="/movies/new" component={NewMovie} />
            <Route exact path="/movies/:id/edit" component={EditMovie} />
            <Route exact path="/movies/:id" component={MovieDetails} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
