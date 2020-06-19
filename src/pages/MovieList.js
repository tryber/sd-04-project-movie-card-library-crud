import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      load: false,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((movies) => {
      this.setState({
        movies: movies,
        load: true,
      });
    });
  }

  render() {
    const { movies, load } = this.state;

    if (load) {
      return (
        <div data-testid="movie-list" className="app">
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
