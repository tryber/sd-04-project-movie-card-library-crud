import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import MovieLibrary from './components/MovieLibrary';

import Index from './components/index';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Route to={ROUTES.ROOT} component={MovieLibrary}></Route>
    </BrowserRouter>
  );
}

export default App;
