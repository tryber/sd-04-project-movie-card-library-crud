import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={movie.imagePath} />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{movie.title}</h4>
          <p className="movie-card-storyline">{movie.storyline}</p>
          <Link to={`/movies/${movie.id}`}>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;
