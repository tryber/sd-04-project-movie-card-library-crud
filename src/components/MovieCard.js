import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { id, title, storyline, imagePath } = this.props.movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img src={imagePath} alt="movie" />
        <div className="card-content">
          <h2>{title}</h2>
          <p>{storyline}</p>
          <Link to={`movies/${id}`}>Detalhes</Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;
