import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { MovieList, EditMovie, MovieDetails, NewMovie } from './pages/index'
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
          <li><Link to="/movies/new">ADICIONAR CARTÃO</Link></li>
          <li><Link to="/movies/:id/edit">Add Movie</Link></li>
        </ul>
      </header>

      <main>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/movies/new" component={NewMovie} />
          <Route path="/movies/:id/edit" component={EditMovie} />
        </Switch>
      </main>

    </Router>
  );
}

export default App;
