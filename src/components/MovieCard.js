import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;

    return (
      <div data-testid="movie-card">
        <div>{movie.title}</div>
        <div>{movie.storyline}</div>
        <Link to={`/movies/${movie.id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
  }),
};

MovieCard.defaultProps = {
  movie: {
    id: 0,
    title: '',
    storyline: '',
  },
};

export default MovieCard;
