import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends Component {
  render() {
    const { id, title, storyline } = this.props.movieData;

    return (
      <div data-testid="movie-card">
        <div>{title}</div>
        <div>{storyline}</div>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movieData: {
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
  },
};

MovieCard.defaultProps = {
  movieData: {
    id: 0,
    title: '',
    storyline: '',
  },
};

export default MovieCard;
