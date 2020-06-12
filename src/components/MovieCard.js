import React, { Component } from 'react';
import movies from '../services/movieData';

class MovieCard extends Component {
  render() {
    const { title } = this.props.movieData;

    return (
      <div data-testid="movie-card">
        <div>{title}</div>
      </div>
    );
  }
}

export default MovieCard;
