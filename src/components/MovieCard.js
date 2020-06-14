import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, imagePath, storyline, title } = movie;
    return (
      <div data-testid="movie-card">
        <img src={imagePath} alt="a movie" />
        <p>{title}</p>
        <p>{storyline}</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: propTypes.shape({}),
};

MovieCard.defaultProps = {
  movie: {},
};
