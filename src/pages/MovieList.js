import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import { getMovies } from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

// import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
    };
  }

  componentDidMount() {
    getMovies()
      .then((movies) => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;
    return (movies) ?
      (
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
      ) :
        <Loading />;
  }
}

export default MovieList;
