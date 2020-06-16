import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import MovieForm from '../components/MovieForm';
import { MovieCardStyle, MovieListStyle } from '../styles/styles';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { shouldRedirect: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(newMovie) {
    await movieAPI.createMovie(newMovie);
    await this.setState({ shouldRedirect: true });
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;
    return (
      <div data-testid="new-movie">
        <MovieListStyle>
          <MovieCardStyle width={`${70}vw`}>
            <MovieForm onSubmit={this.handleSubmit} />
          </MovieCardStyle>
        </MovieListStyle>
      </div>
    );
  }
}

export default NewMovie;
