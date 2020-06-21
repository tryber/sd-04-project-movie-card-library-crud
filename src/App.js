import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import AddMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <div>
      <div>Movie Card Library Crud</div>
      <Router>
        <Switch>
          <Route exact path="/movies/new" component={AddMovie} />
          <Route exact path="/movies/:id" component={MovieDetails} />
          <Route exact path="/movies/:id/edit" component={EditMovie} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
