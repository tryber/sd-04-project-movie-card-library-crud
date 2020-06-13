import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={MovieList}/>
          <Route exact path='/movies/new' component={NewMovie}/>
          <Route exact path='/movies/:id' component={MovieDetails}/>
          <Route exact path='/movies/:id/edit' component={EditMovie}/>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
