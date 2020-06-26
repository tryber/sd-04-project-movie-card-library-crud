import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props
    return (
      <div data-testid="movie-card">
        <span>{movie.title}</span>
        <span>{movie.storyline}</span>
        <Link to={'movies/:id'}>"VER DETALHES"</Link>
        Movie Card
      </div>
    );
  }
}

export default MovieCard;
