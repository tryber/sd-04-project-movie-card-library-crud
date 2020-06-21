import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
  const { movie } = props;
  console.log(props)
  return (
    <div data-testid="movie-card">
      <img src={movie.imagePath} alt="movie Card" />
      <div className="movie-screen">
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
      </div>
      <Link to={`movie/${movie.id}`} >Ver detalhes</Link>
    </div>
  );
};

MovieCard.prototype = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
