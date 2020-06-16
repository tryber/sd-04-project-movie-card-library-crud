import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((movies) =>
      this.setState({
        loading: false,
        movies,
      }),
    );
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) return <Loading />;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
