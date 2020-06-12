import React from 'react';
import { BrowserRouter as Router, BrowserRouter } from 'react-router-dom';
import { Loading, MovieCard, MovieForm } from './components/index';
import './App.css'

function App() {
  return (
      <Router >
        <Loading />
        <MovieCard />
        <MovieForm />
      </Router>

  );
}

export default App;
