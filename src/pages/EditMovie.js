import React, { Component } from 'react';
import Loading from '../components/Loading';
import MovieForm from '../components/MovieForm';

import * as movieAPI from '../services/movieAPI';
import { Redirect } from 'react-router-dom';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: [], isLoaded: false, shouldRedirect: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    movieAPI.getMovie(match.params.id).then((movie) => {
      const isLoaded = true;
      this.setState({ movie, isLoaded });
    });
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie).then(() => this.setState({ shouldRedirect: true }));
  }

  render() {
    const { isLoaded, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (isLoaded) {
      return (
        <div data-testid="edit-movie">
          <MovieForm movie={movie} onSubmit={this.handleSubmit} />
        </div>
      );
    }
    return <Loading />;
  }
}

export default EditMovie;
