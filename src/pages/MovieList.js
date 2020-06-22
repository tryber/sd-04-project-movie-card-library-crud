import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((movies) => {
      this.setState({ movies, success: true });
    });
  }

  render() {
    const { movies, success } = this.state;

    if (!success) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    );
  }
}

export default MovieList;
