import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import { getMovies } from '../services/movieAPI';
import { Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
    };
  }

  componentDidMount() {
    getMovies()
      .then((movies) => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;
    return (movies) ?
      (
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
      ) :
        <Loading />;
  }
}

export default MovieList;
