import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { id, title, subtitle, storyline, rating, imagePath, genre } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <img src={imagePath} alt={title} />
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <p>{storyline}</p>
        <span>{rating}</span>
        <span>{genre}</span>
        <div>
          <Link to={`movies/${id}`}>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.defaultProps = {
  movie: null,
};

MovieCard.PropTypes = {
  movie: PropTypes.shape({  
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number,
    imagePath: PropTypes.string.isRequired,
    genre: PropTypes.string,
  }),
};

export default MovieCard;
