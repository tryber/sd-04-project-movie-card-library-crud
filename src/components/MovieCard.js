import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { id, title, subtitle, storyline, rating, imagePath, bookmarked, genre } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <img src={imagePath} alt={title} />
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <p>{storyline}</p>
        <span>{rating}</span>
        <span>{genre}</span>
        <div>
          <Link to={`/${id}`}>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;
