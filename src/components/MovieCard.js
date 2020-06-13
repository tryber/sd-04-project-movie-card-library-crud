import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { id, title, storyline, imagePath } = this.props.movie;
    return (
      <div className="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
        <div className="movie-card-body">
          <h5 className="movie-card-title">{title}</h5>
          <p className="movie-card-storyline">{storyline}</p>
          <div>
            <Link to={`movies/${id}`}>VER DETALHES</Link>
          </div>
        </div>
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
