import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';


import MovieList from'./pages/MovieList'

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <MovieList />
    </Router>
  );
}

export default App;
