import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <MovieList />
    </BrowserRouter>
  );
}

export default App;
