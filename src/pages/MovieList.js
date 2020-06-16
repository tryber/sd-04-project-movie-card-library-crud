import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
// import movies from '../services/movieData.js';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading.js';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itsLoading: true,
      movies: [],
      error: null,
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((data) => this.setState({
        itsLoading: false,
        movies: data,
      }),
      (error) => this.setState({
        itsLoading: false,
        error,
      }));
  }

  render() {
    const { itsLoading, movies, error } = this.state;

    // Render Loading here if the request is still happening
    if (error) return <div>Erro: {error.message}</div>
    if (itsLoading) return <Loading />
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
