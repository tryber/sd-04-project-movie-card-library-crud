import React, { Component } from 'react';
import { MovieCard, Loading } from '../components/index';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      movies: [],
      isLoaded: true,
    }
  }

  async componentDidMount() {
    const moviesResult = await movieAPI.getMovies();
    this.setState({ movies: moviesResult, isLoaded: false });
  }

  render() {
    const { movies, isLoaded } = this.state;

    return (
      isLoaded ? <Loading /> :
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
