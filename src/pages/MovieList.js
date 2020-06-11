import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = { movies: [], isLoaded: false };
  }

  componentDidMount() {
    movieAPI.getMovies().then((movies) => {
      const isLoaded = true;
      this.setState({ movies, isLoaded });
    });
  }

  render() {
    const { movies, isLoaded } = this.state;

    return (
      <div data-testid="movie-list">
        {isLoaded ? (
          movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default MovieList;
