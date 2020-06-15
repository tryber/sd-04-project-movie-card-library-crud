import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { MovieForm } from '../components';
import { createMovie } from '../services/movieAPI'
// import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
      shouldRedirect: null,
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    createMovie(newMovie).then((ok) => this.setState({ shouldRedirect: ok }));
  }

  render() {
    const { shouldRedirect } = this.state;
    return shouldRedirect ? <Redirect to="/" /> :
    (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default NewMovie;
