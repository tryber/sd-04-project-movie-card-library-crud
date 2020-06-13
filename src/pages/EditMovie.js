import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      shouldRedirect: false,
      status: 'loading',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id)
    .then((movie) => this.setState({ movie, status: 'loaded' }));
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie)
    .then((status) => this.setState({ status, shouldRedirect: true }));
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
      return (
        <Redirect to="/" />
      );
    }

    if (status === 'loading') {
      // render Loading
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.any,
  }).isRequired,
};

export default EditMovie;
