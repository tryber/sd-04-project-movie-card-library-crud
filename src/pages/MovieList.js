import React, { Component } from 'react';
import { getMovies } from '../services/movieAPI';

import { MovieCard, Loading } from '../components';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      movies: [],
    };
  }

  componentDidMount = () => {
    getMovies().then((data) => {
      this.setState({
        isLoading: false,
        movies: data,
      });
    });
  };

  render() {
    const { isLoading, movies } = this.state;

    if (isLoading) return <Loading />;

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
