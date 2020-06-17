import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, id } = movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img
          alt={`${title} cover`}
          className="movie-card-image"
          src={imagePath}
        />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <h4 className="movie-card-subtitle">{storyline}</h4>
        </div>
        <Link to={`/movies/${id}`} className="btn">
          VER DETALHES
        </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
