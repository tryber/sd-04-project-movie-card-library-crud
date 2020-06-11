// Rotas: O componente App deve renderizar BrowserRouter
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { MovieList, MovieDetails, NewMovie, EditMovie } from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Link to='/'></Link>
      <Link to='/movies'>Informações Detalhadas</Link>
      <Link to='/movies/new'>Adicionar Novo Filme</Link>
      <Link to='/movies/:id/edit'>Editar Filme</Link>
      <switch>
        <Route path='/movie/new' component={NewMovie} />
        <Route path='/movie/:id/edit' render={(props) => <EditMovie {...props} />} />
        <Route path='/movies/:id' render={(props) => <MovieDetails {...props} />} />
        <Route exact path='/' component={MovieList} />
      </switch>

    </BrowserRouter>
  );
}

export default App;
