import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import MovieList from './components/MovieList';

import Index from './components/index';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Route to={ROUTES.ROOT} component={MovieList}></Route>
    </BrowserRouter>
  );
}

export default App;
