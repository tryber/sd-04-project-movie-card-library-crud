import PropTypes from "prop-types";
import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const {
      title,
      imagePath,
      storyline,
      id,
    } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <h1>{title}</h1>
        <img src={imagePath} />
        <p>{storyline}</p>
        <Link to={`movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.object
}

export default MovieCard;
