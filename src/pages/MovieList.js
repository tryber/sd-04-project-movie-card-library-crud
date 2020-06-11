import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import '../styles/MovieList.css';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((data) => this.setState({ movies: data }));
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list" className="movie-list">
        {movies ? movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)
          : <Loading />}
      </div>
    );
  }
}

export default MovieList;
