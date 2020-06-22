import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MovieCard(props) {
  const {
    movie: { title, subtitle, storyline, rating, imagePath, id },
  } = props;
  return (
    <div data-testid="movie-card" className="movie-card">
      <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
      <div className="movie-card-body">
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
        <p className="rating">{rating}</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),
};

MovieCard.defaultProps = {
  movie: {
    id: 100,
    title: 'Somemovie',
    subtitle: 'Some sub',
    storyline: 'Some story',
    rating: 5,
    imagePath: '/img.jpg',
  },
};

export default MovieCard;
