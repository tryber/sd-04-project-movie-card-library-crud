import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';
function App() {
  return (
    <Router>
      <header>
        <ul>
          <li>
            <Link to="/movies/new">ADICIONAR CARTÃO</Link>
          </li>
        </ul>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/movies/new" component={NewMovie} />
          <Route exact path="/movies/:id" component={MovieDetails} />
          <Route exact path="/movies/:id/Edit" component={EditMovie} />
          <Route path="/" component={NotFound} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
