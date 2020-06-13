import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import Loading from './Loading';
import { getMovie } from '../services/movieAPI';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      movie: [],
    };
  }

  componentDidMount = () => {
    const { id } = this.props.match.params;

    getMovie(id).then((movie) => {
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
        <img src={process.env.PUBLIC_URL + movie.imagePath} alt="Movie Cover" />
        <h2>{movie.title}</h2>
        <h3>{movie.subtitle}</h3>
        <p>{movie.storyline}</p>
        <div>{movie.genre}</div>
        <div>{movie.rating}</div>
        <Link to={ROUTES.ROOT}>VOLTAR</Link>
        <Link to={ROUTES.UPDATE_MOVIE.replace(':id', movie.id)}>EDITAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
