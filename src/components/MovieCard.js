import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { id, title, storyline, imagePath } = this.props.movie;
    return (
      <div className="card" data-testid="movie-card">
        <img src={this.props.imagePath} alt="movie" />
        <div>
          {this.props.title}
        </div>
        <div className="card-body">
          {this.props.storyline}
        </div>
        <div className="card-link">
          <Link to={`/movies/${this.props.id}`}>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;
