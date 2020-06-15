import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { id, title, storyline, imagePath } = this.props.movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <h2 className="movie-card-title">{title}</h2>
        <p>{storyline}</p>
        <div>
          <img src={imagePath} alt="Movie Cover"  className="movie-card-image"/>
        </div>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
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

MovieCard.defaultProps = {
  movie: {
    id: 0,
    title: '',
    storyline: '',
    imagePath: '',
  },
};

export default MovieCard;
