import React, { Component } from 'react';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      status: 'loading',
      movie: {},
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    this.getMovieAPI();
  }

  async getMovieAPI() {
    const { id } = this.props.match.params; // pegando o id da URL
    const movieResult = await movieAPI.getMovie(id);
    this.setState({ movie: movieResult, status: '', });
  }

  handleSubmit(updatedMovie) {
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) { // depois ver como funciona isto
      // Redirect
    }

    if (status === 'loading') {
      return (
      <Loading />
      );
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
