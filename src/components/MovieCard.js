import PropTypes from 'prop-types';
import React from 'react';
// import movies from '../services/movieData';
import '../style.css';

class MovieCard extends React.Component {
  render() {
    const { id, imagePath, rating, title, storyline, subtitle } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <div className="movie-card">
          <div className="movie-card-body">
            <img className="movie-card-image" src={imagePath} alt={id} />
            <p className="movie-card-title">{title}</p>
            <p className="movie-card-subtitle">{subtitle}</p>
            <p className="movie-card-storyline">{storyline}</p>
            <p className="rating">{rating}</p>
          </div>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.object,
};

export default MovieCard;
