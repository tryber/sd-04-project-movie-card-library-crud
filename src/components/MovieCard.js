import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieCardStyle } from '../styles/styles';
import Image from './cardComps/Image';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <MovieCardStyle height={`${310}px`} width={`${300}px`}>
          <Image src={movie.imagePath} alt={movie.title} />
          <h2>{movie.title}</h2>
          <article>
            <p>{movie.storyline}</p>
          </article>
          <Link to={`/movies/${movie.id}`}>VER DETALHES</Link>
        </MovieCardStyle>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
