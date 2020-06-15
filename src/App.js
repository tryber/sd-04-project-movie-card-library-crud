import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

// function App() {
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <header>
          <ul>
            <li><Link to="/">Lista de Filmes</Link></li>
            <li><Link to="/pages/:id">Novo Filme</Link></li>
            <li><Link to="/pages/new">Detalhes</Link></li>
            <li><Link to="/pages/:id/edit">Editar Filme</Link></li>
          </ul>
        </header> */}
        {/* <main> */}
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/pages/:id" component={NewMovie} />
          <Route exact path="/pages/new" component={MovieDetails} />
          <Route exact path="/pages/:id/edit" component={EditMovie} />
          <Route component={NotFound} />
        </Switch>
        {/* </main> */}
      </BrowserRouter>
    );
  }
}

export default App;

// {/* <div>Movie Card Library CRUD</div> */}
