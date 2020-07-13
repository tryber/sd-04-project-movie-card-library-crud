import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state = {
      isLoaded: false,
      shouldRedirect: false,
      movie: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    movieAPI.getMovie(id)
    .then((movie) => this.setState({ movie, isloaded: true }));
  }

  handleSubmit(updateMovie) {
    movieAPI.updateMovie(updateMovie)
      .then(() => this.setState({ shouldRedirect: true }));
  }

  render() {
    const { isLoaded, shouldRedirect, movie } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;

    if (!isLoaded) return <Loading />;

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
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
