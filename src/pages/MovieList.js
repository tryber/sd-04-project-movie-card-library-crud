import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import './MovieList.css';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      movies: [],
    };
  }

  async componentDidMount() {
    const results = await movieAPI.getMovies();
    await this.setState({ movies: results });
    this.setState({ success: true });
  }

  render() {
    const { movies, success } = this.state;

    if (!success) {
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
