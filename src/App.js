import React from 'react';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
        <div>
          <h1>Movie Card Library CRUD</h1>
          <Router>
            <Switch>
              <Route exact path="/" component={MovieList} />
              <Route exact path="/movies/new" component={NewMovie} />
              <Route exact path="/movies/:id" component={MovieDetails} />
              <Route exact path="/movies/:id/edit" component={EditMovie} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </div>
    );
  }
}

export default App;
