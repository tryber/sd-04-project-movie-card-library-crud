import React, { Component } from 'react';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';
import { Redirect } from 'react-router-dom';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { shoudRedirect: false};
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie).then(() => this.setState(({shoudRedirect: true})))
  }

  render() {
    if(this.state.shoudRedirect) return <Redirect to="/" />;
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
