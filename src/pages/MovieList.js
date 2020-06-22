import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      movies: null,
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
    .then((movies) => {
      this.setState({
        isLoaded: true,
        movies,
      });
    });
  }

  render() {
    const { movies, isLoaded } = this.state;

    // Render Loading here if the request is still happening
    if (!isLoaded) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
