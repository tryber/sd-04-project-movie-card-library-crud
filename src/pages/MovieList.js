import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props)
    this.state ={
      movies: '0',
    }
  }

  componentDidMount() {
    this.setState({movies: movieAPI.getMovies()})
  }

  render() {
    const { movies } = this.state;
    console.log(this.state.movies)
    if (movies === '0') return <Loading />;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
