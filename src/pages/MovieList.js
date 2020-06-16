import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: '',
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((response) => this.setState({ movies: response }));
  }
  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    return movies === '' ? (
      <Loading />
    ) : (
      // return
      <div data-testid="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    );
  }
}

export default MovieList;
