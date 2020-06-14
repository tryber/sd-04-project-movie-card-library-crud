import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      movie: [],
    };
  }

  componentDidMount = () => {
    const { params } = this.props.match;

    movieAPI.getMovie(params.id).then((movie) => {
      this.setState({
        isLoading: false,
        movie,
      });
    });
  };

  deleteMovie = () => {
    const { movie } = this.state;
    const { history } = this.props;

    movieAPI.deleteMovie(movie.id).then((response) => {
      if (response.status === 'OK') {
        history.push('/');
      }
    });
  };

  render() {
    const { isLoading, movie } = this.state;

    if (isLoading) return <Loading />;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${movie.imagePath}`} />
        <h1>{movie.title}</h1>
        <p>{`Subtitle: ${movie.subtitle}`}</p>
        <p>{`Storyline: ${movie.storyline}`}</p>
        <p>{`Genre: ${movie.genre}`}</p>
        <p>{`Rating: ${movie.rating}`}</p>
        <Link to={ROUTES.ROOT}>VOLTAR</Link>
        <Link to={ROUTES.UPDATE_MOVIE.replace(':id', movie.id)}>EDITAR</Link>
        <Link to={ROUTES.ROOT} onClick={() => this.deleteMovie()}>
          DELETAR
        </Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default MovieDetails;
