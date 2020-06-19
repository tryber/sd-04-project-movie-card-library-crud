import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, imagePath, storyline, title } = movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <div className="movie-card-body">
          <img className="movie-card-image" src={imagePath} alt={title} />
          <h4 className="movie-card-title">{title}</h4>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <div className="details">
          <Link to={`movies/${id}`}>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;
