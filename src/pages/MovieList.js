import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      movies: null,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((movies) => this.setState({ movies, isLoading: true }));
  }

  render() {
    const { movies, isLoading } = this.state;
    // Render Loading here if the request is still happening
    if (!isLoading) return <Loading />;
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
