import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Loading, MovieCard, MovieForm } from './components/index';
import { MovieList, EditMovie, MovieDetails, NewMovie, NotFound } from './pages/index'
import './App.css';

function App() {
  return (
    <Router>

      <header>
        <div>
          <h1>
            Movie Library Project
          </h1>
        </div>
        <ul className="header-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies/new">Add Movie</Link></li>
          <li><Link to="/movies/?{id}/edit">Edit Movie</Link></li>
        </ul>
      </header>

      <main>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/movies/:id" component={MovieCard} />
          <Route exact strict path="/movies/new" component={MovieForm} />
          <Route exact strict path="/movies/:id/edit" component={MovieForm} />
        </Switch>
      </main>

    </Router>
  );
}

export default App;
