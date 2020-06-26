import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const movie = this.props.movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <Link to={`/movies/${movie.id}`}>Ver Detalhes</Link>
        <img
          className="movie-card-image"
          src={movie.imagePath}
          alt={movie.title}
        />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{movie.title}</h4>
          <h5 className="movie-card-subtitle">{movie.subtitle}</h5>
          <p className="movie-card-storyline">{movie.storyline}</p>
        </div>
      </div>
    );
  }
}

export default MovieCard;
