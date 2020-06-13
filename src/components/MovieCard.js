import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const { id, title, storyline, imagePath } = this.props.movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
        <div className="movie-card-body">
          <h2 className="movie-card-title">{title}</h2>
          <p className="movie-card-storyline">{storyline}</p>
          <div>
            <Link className="buttons bt-back" to={`movies/${id}`}>VER DETALHES</Link>
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

MovieCard.defaultProps = {
  movie: {
    id: 0,
    title: '',
    storyline: '',
    imagePath: '',
  },
};

export default MovieCard;
