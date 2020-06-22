import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>Movie Card Library CRUD</h1>
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route exact path="/movies/new" component={NewMovie} />
            <Route exact path="/movies/:id" component={MovieDetails} />
            <Route exact path="/movies/:id/edit" component={EditMovie} />
            <Route path="/" component={NotFound} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
