import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';
import { MovieCardStyle, MovieListStyle } from '../styles/styles';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: null, loading: true, shouldRedirect: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id).then((movie) => {
      this.setState({ movie, loading: false });
    });
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    await this.setState({ shouldRedirect: true });
  }

  render() {
    const { loading, shouldRedirect, movie } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;
    if (loading) return <Loading />;
    return (
      <div data-testid="edit-movie">
        <MovieListStyle>
          <MovieCardStyle width={`${70}vw`}>
            <MovieForm movie={movie} onSubmit={this.handleSubmit} />
          </MovieCardStyle>
        </MovieListStyle>
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
