import React from 'react';
import PropTypes from 'prop-types';

function MovieCard(props) {
  const { movie } = props;
  const { title, subtitle, storyline, rating, imagePath, id } = movie;
  return (
    <div data-testid="movie-card" className="movie-card">
      <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
      <div className="movie-card-body">
        <h4 className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
        <p className="rating">{rating}</p>
        <a href={`/movies/${id}`}>VER DETALHES</a>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  imagePath: PropTypes.string,
};

MovieCard.defaultProps = {
  movie: {},
  title: 'Some Movie',
  subtitle: 'The Movie',
  storyline: 'This is a movie',
  imagePath: './img.jpeg',
};

export default MovieCard;
