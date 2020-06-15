import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
  const { movie } = props;
  const { id, imagePath, storyline, title } = movie;
  return (
    <div data-testid="movie-card">
      <img src={imagePath} alt="movie" />
      <p>{title}</p>
      <p>{storyline}</p>
      <Link to={`/movies/${id}`}>VER DETALHES</Link>
    </div>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};