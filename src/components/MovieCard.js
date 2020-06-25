import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
  const { movie } = props;
  return (
    <div data-testid="movie-card">
      <img src={movie.imagePath} alt="movie Card" />
      <p>{movie.title}</p>
      <p>{movie.storyline}</p>
      <Link to={`movie/${movie.id}`} >Ver detalhes</Link>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
