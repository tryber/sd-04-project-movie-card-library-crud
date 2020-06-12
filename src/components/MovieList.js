import React, { Component } from 'react';
import { getMovies } from '../services/movieAPI';

import Loading from './Loading';
import MovieCard from './MovieCard';

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
    return (
      <div>
        <h1>Movie Library</h1>
        {isLoading ? <Loading /> : null}
        <div data-testid="movie-list">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movieData={movie} />
          ))}
        </div>
      </div>
    );
  }
}

export default MovieList;
