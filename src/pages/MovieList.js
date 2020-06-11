import React, { Component } from 'react';
// import MovieCard from '../components/MovieCard';TO REMOVE

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  render() {
    // const { movies } = this.state; TO REMOVE

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {/* {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)} */}
      </div>
    );
  }
}

export default MovieList;
