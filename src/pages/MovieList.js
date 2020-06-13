import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import { getMovies } from '../services/movieAPI';
import '../App.css';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
    };
  }

  componentDidMount() {
    getMovies().then((movies) => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;
    return (movies) ? (
      <div>
        <div className="page-op">
          <Link className="buttons bt-action" to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
        <div data-testid="movie-list" className="movie-list">
          {movies.map((movie) => (<MovieCard key={movie.title} movie={movie} />))}
        </div>
      </div>
    ) :
      <Loading />;
  }
}

export default MovieList;
