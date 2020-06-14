import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { MovieForm, Loading } from '../components';
import { getMovies, updateMovie } from '../services/movieAPI';
import { Redirect } from 'react-router-dom';
// import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: null,
      movie: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    getMovies(this.props.match.params.id)
      .then((movie) => this.setState({ movie, status: null }));
  }

  handleSubmit() {
    updateMovie(updateMovie)
      .then((shouldRedirect) => this.state({ shouldRedirect }));
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;

    if (shouldRedirect) return <Redirect to="/" />;
      // Redirect

    if (status === 'loading') return <Loading />;
      // render Loading

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
    }),
  }).isRequired,
};

export default EditMovie;
