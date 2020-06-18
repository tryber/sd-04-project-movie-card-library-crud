import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        <img src={movie.imagePath} alt="Filme" />
        <p>{movie.title}</p>
        <p>{movie.storyline}</p>
        <Link to={`movies/${movie.id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
