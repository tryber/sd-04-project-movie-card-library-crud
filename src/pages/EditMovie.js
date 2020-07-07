import React, { Component } from 'react';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';
import { Redirect } from 'react-router-dom';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true });
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    movieAPI.getMovie(id)
      .then((movie) => this.setState({ movie }));
  }

  render() {
    const { shouldRedirect, movie } = this.state;
    const { id } = movie;
    if (shouldRedirect) return (<Redirect to="/" />);

    return id ? (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    ) : (<Loading />)
  }
}

export default EditMovie;
