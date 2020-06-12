import React, { Component } from 'react';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Redirect } from 'react-router-dom';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(newMovie) {
    this.setState({ status: 'loading' });
    movieAPI.createMovie(newMovie)
      .then((shouldRedirect) => this.setState({ shouldRedirect }));
  }

  render() {
    const { status, shouldRedirect } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;

    if (status) return <Loading />;

    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default NewMovie;
