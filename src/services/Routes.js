import React from "react";
import { Switch, Route } from "react-router-dom";
import MovieList from "../pages/MovieList";
import NewMovie from "../pages/NewMovie";
import EditMovie from "../pages/EditMovie";
import MovieDetails from "../pages/MovieDetails";
import NotFound from "../pages/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" component={MovieDetails} />
      <Route path="/movies/new" component={NewMovie} />
      <Route path="/movies/:id/edit" component={EditMovie} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
