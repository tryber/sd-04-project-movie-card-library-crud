import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

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
