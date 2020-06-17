import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard, Loading } from '../components/';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoaded: true,
    };

    this.getMoviesAPI = this.getMoviesAPI.bind(this);
  }

  async componentDidMount() {
    this.getMoviesAPI();
  }

  async getMoviesAPI() {
    const moviesResult = await movieAPI.getMovies();
    this.setState({ movies: moviesResult, isLoaded: false });
  }

  render() {
    const { movies, isLoaded } = this.state;

    return (
      isLoaded ? <Loading /> :
      <div data-testid="movie-list">
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
