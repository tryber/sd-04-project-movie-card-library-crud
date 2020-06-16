import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  MovieList,
  NewMovie,
  EditMovie,
  MovieDetails,
  NotFound } from "./pages/index";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={MovieList} />
      <Route exact path="/movies/new" component={NewMovie} />
      <Route exact path="/movies/:id" component={MovieDetails} />
      <Route exact path="/movies/:id/edit" component={EditMovie} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Routes;
