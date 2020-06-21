import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, id } = this.props.movie;

    return (
      <div data-testid="movie-card" className="movie-card">
        <div>
          <img className="movie-img" src={imagePath} alt="Movie Cover" />
          <h2 className="movie-title">{title}</h2>
          <span className="movie-subtitle">{subtitle}</span>
        </div>
        <div>
          <p className="movie-storyline">{storyline}</p>
        </div>
        <div className="details-div">
          <Link className="movie-details" to={`/movies/${id}`}>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
