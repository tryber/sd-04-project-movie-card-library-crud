import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { id, title, storyline, imagePath } = this.props.movie;
    return (
      <div className="card" data-testid="movie-card">
        <img src={imagePath} alt="movie" />
        <div>
          {title}
        </div>
        <div className="card-body">
          {storyline}
        </div>
        <div className="card-link">
          <Link to={`/movies/${id}`}>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;
