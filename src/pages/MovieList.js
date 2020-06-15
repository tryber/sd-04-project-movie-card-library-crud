import Link from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';
import React, { Component } from 'react';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true, // inicialmente, a mensagem de loading é o estado setado
      movies: '', // inicialmente, o "movies" é vazio
    };
  }

  // Ao renderizar o componente, o "loading" deve sumir e o estado "movies" deve ser o que
  // for retornado da requisição
  componentDidMount() {
    movieAPI.getMovies().then((response) =>
      this.setState({
        loading: false,
        movies: response,
      }),
    );
  }
  render() {
    const { movies, loading } = this.state;

    if (loading === true) {
      return <Loading />;
    }
    return (
      <div>
        <div>
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
        <div data-testid="movie-list">
          {movies.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
}

export default MovieList;
