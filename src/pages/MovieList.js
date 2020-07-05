import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((movies) => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return movies !== [] ? (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    ) : (<Loading />);
  }
}

export default MovieList;
