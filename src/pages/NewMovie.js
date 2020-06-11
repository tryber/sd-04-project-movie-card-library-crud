import React, { Component } from 'react';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';
import { Redirect } from 'react-router-dom';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { shouldRedirect: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    movieAPI
      .createMovie(newMovie)
      .then(res =>
        res === 'OK'
          ? this.setState(state => ({ ...state, shouldRedirect: true }))
          : console.log('ERRO'),
      );
  }

  render() {
    if (this.state.shouldRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
