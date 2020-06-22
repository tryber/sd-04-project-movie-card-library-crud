import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';


function App() {
  return (
      <BrowserRouter>
      <div>
          <header>
            <div className="page-title">Movie Card Library CRUD</div>
          </header>
          <main>
            <Switch>
              <Route exact path="/movies/new" component={NewMovie} />
              <Route exact path="/movies/:id" component={MovieDetails} />
              <Route exact path="/" component={MovieList} />
              <Route path="/movies/:id/edit" component={EditMovie} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
  );
}

export default App;
