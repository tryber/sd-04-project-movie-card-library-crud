import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loaded: false,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((movies) => {
      const loaded = true;
      this.setState({ movies, loaded });
    });
  }

  render() {
    const { movies, loaded } = this.state;
    if (loaded) {
      return (
        <div data-testid="movie-list">
          {movies.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </div>
      );
    }
    return <Loading />;
  }
}

export default MovieList;
