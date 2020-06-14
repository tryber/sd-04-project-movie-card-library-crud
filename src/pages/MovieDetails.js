import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

import { getMovie } from '../services/movieAPI';
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
    const { match } = this.props;

    getMovie(match.params.id).then((movie) => {
      this.setState({
        isLoading: false,
        movie,
      });
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
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: {
    params: {
      id: PropTypes.number,
    },
  },
};

MovieDetails.defaultProps = {
  match: {
    params: {
      id: 0,
    },
  },
};

export default MovieDetails;
