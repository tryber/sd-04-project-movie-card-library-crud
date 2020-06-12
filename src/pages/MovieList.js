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
    console.log('Entrou no Did Mount');
    const moviesAPI = await movieAPI.getMovies();
    this.setState({ movies: moviesAPI });
  }


  render() {
    const { movies } = this.state;
    // Render Loading here if the request is still happening
    console.log('Entrou no Render');
    return (
      (!this.state.movies) ? <Loading /> :
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
