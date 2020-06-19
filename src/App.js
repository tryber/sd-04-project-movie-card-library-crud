import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import {
  MovieList,
  MovieDetails,
  EditMovie,
  NewMovie,
  NotFound,
} from './pages';
import { HeaderStyle } from './styles/styles';
import GlobalStyle from './styles/global';
// push do tunico
function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <HeaderStyle>
          Movie Library CreateReadUpdateDelete
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </HeaderStyle>
        <Switch>
          <Route path="/movies/new" component={NewMovie} />
          <Route path="/movies/:id/edit" component={EditMovie} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route exact path="/" component={MovieList} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
