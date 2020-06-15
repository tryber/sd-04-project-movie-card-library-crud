import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: '',
      loading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((e) =>
      this.setState({
        movies: e,
        loading: false,
      }),
    );
  }

  render() {
    const { movies, loading } = this.state;
    if (loading === true) {
      return <Loading />;
    } else {
      return (
        <div data-testid="movie-list">
          {movies.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </div>
      );
    }
  }
}

export default MovieList;
