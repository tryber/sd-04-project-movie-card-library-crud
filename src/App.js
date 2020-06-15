import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <div>Movie Card Library CRUD</div>
        <Route exact path='/' component={MovieList} />
        <Route exact path='/movies/new' component={NewMovie} />
        <Route exact path='/movies/:id' component={MovieDetails} />
        <Route exact path='/movies/:id/edit' component={EditMovie} />
        <Route exact path='/' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
