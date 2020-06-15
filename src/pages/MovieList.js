import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';
import movies from '../services/movieData';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      movies,
    }
  }

componentDidMount() {
  movieAPI.getMovies()
  .then(res => {
    this.setState({
      isLoaded:true,
    })
  })
}

  render() {
    const { movies, isLoaded } = this.state;

    // Render Loading here if the request is still happening
    if(!isLoaded) {
      return <Loading />
    }

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
