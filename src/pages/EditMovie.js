import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id).then((movie) => this.setState({ movie }));
  }
  handleSubmit(updatedMovie) {}

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      // Redirect
    }

    if (status === 'loading') {
      // render Loading
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
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
export default EditMovie;
