import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    // função getMovies chamada assim que o componente é montado

    movieAPI.getMovies().then((movies) => {
      this.setState({
        movies,
        loading: false,
      });
      // console.log(this.state.movies)
    });
  }

  render() {
    const { movies, loading } = this.state;
    if (loading === true) {
      return <Loading />;
    }
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
