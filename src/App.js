import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <Router>
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" component={MovieDetails} />
    </Router>
  );
}

export default App;
