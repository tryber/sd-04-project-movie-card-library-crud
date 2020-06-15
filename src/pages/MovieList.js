import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = { movies: [], loading: true };
  }

  componentDidMount() {
    movieAPI
      .getMovies()
      .then((data) => this.setState({ movies: data, loading: false }));
  }

  render() {
    const { movies } = this.state;
    console.log(this.state);
    return this.state.loading ? (
      <Loading />
    ) : (
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    );
  }
}

export default MovieList;
