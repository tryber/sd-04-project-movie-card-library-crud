import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends Component {
  render() {
    const { id, title, storyline } = this.props.movieData;

    return (
      <div data-testid="movie-card">
        <div>{title}</div>
        <div>{storyline}</div>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
