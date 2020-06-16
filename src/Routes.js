import React from "react";
import { Switch, Route } from "react-router-dom";
import { MovieList, NewMovie, EditMovie, MovieDetails, NotFound } from "./pages/index";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id/edit" render={(props) => <EditMovie {...props} />} />
      <Route path="/movies/:id" render={(props) => <MovieDetails {...props} />} />
      <Route path="/movies/new" component={NewMovie} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
