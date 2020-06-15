import React from 'react';
import { Link, useParams } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, id } = movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img
          alt={`${title} cover`}
          className="movie-card-image"
          src={imagePath}
        />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <h4 className="movie-card-subtitle">{subtitle}</h4>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <Link to={`/movies/${id}`}>
          <button>VER DETALHES</button>
        </Link>
      </div>
    );
  }
}

export default MovieCard;
