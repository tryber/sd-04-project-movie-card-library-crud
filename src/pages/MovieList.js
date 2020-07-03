import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: [], load: true };
  }

  componentDidMount() {
    movieAPI
    .getMovies()
    .then((movie) => this.setState({ movies: movie, load: false }));
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    if (this.state.load) {
      return (
        <Loading />
      );
    }
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
