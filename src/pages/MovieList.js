import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading'

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props)
    this.state = {
    
    }
  }

  async componentDidMount() {
    const moviesAPI = await movieAPI.getMovies();
    this.setState({ movies: moviesAPI });
  }

  render() {
    const { movies } = this.state;
    return (
      (!this.state.movies) ? <Loading /> :
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
