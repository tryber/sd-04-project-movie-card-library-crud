import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { title, id } = this.props.movie;
    return (
      <div data-testid="movie-card">
        Movie Card
        <h4>{title}</h4>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
