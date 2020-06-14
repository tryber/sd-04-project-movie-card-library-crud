import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import { getMovies } from '../services/movieAPI';
import MovieCard from '../components/MovieCard';
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
    if (!movies) return <Loading />;
    // Render Loading here if the request is still happening

    return (movies) ? (
      <div data-testid="movie-list">
        <div>
          <Link to="movies/new">ADICIONAR CARTÃO</Link>
        </div>
        <div>
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
      </div>
    ) : <Loading />;
  }
}

export default MovieList;
