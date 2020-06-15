import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loadead: false,
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  async getMovies() {
    const data = await movieAPI.getMovies();
    this.setState({ movies: data, loadead: true });
  }

  render() {
    const { movies, loadead } = this.state;

    if (!loadead) return <Loading />;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <Link to="/movies/edit">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
