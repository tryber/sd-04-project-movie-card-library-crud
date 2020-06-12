import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { title, id, storyline, imagePath } = this.props.movie;

    return (
      <div data-testid="movie-card">
        Movie Card
        <div>
          <img src={imagePath} alt="img" />
          <span>{title}</span>
        </div>
        <div>
          <p>{storyline}</p>
        </div>
        <div>
          <Link to={`/movies/${id}`}>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
