import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

const { getMovies } = movieAPI;

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loaded: false,
    };
  }

  componentDidMount() {
    // movieAPI.getMovies().then((movies) => this.setState({movies, loaded: true }));
    this.getMoviesInfo();
  }

  async getMoviesInfo() {
    const list = await movieAPI.getMovies();
    this.setState({ movies: list, loaded: true });
  }

  render() {
    const { movies, loaded } = this.state;

    if (!loaded) {
      return <Loading />;
    }
    // Render Loading here if the request is still happening

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
