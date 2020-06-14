import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      shouldRedirect: false,
      movie: {},
    };
  }

  componentDidMount = () => {
    const { match } = this.props;

    movieAPI.getMovie(match.params.id).then((movie) => {
      this.setState({
        isLoading: false,
        movie,
      });
    });
  };

  handleSubmit = (updatedMovie) => {
    this.setState({ isLoading: true });
    movieAPI.updateMovie(updatedMovie).then((response) => {
      if (response === 'OK') {
        this.setState({ isLoading: false, shouldRedirect: true });
      }
    });
  };

  render() {
    const { isLoading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;

    if (isLoading) return <Loading />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default EditMovie;
