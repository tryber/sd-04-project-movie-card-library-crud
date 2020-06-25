import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import MovieList from './pages/MovieList';

function App() {
  return (
    <div>
      <header>Movie Library CRUD</header>
      <BrowserRouter>
        <Route path="/" exact component={MovieList} />
      </BrowserRouter>
    </div>
  );
}

export default App;
