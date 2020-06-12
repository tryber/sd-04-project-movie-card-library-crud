import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMovies } from '../services/movieAPI';
import * as movieAPI from '../services/movieAPI';
// import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: '',
    };
  }

  componentDidMount() {
    getMovies().then((movies) => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;
    const { match } = this.props;
    const movie = movies[match.params.id - 1];
    // Change the condition to check the state
    if (this.state.movies === '') return 'Carregando...';

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Título: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${movie.id}/edit`}>EDITAR</Link>
        <Link to={'/'}>VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.string,
};

MovieDetails.defaultProps = {
  movie: '',
};

export default MovieDetails;
