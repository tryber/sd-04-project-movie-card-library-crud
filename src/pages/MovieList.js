import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();
    this.state = { movies: null, loading: true };
  }
  componentDidMount() {
    movieAPI.getMovies().then((movies) => {
      this.setState({ movies: [movies], loading: false });
    });
  }
  render() {
    const { movies, loading } = this.state;
    if (loading) return <Loading />
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    );
  }
}

export default MovieList;
