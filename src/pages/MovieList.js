import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((movies) => {
      const isLoaded = true;
      this.setState({ movies, isLoaded });
    });
  }
  render() {
    const { movies, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <React.Fragment>
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
          <div data-testid="movie-list">
            {movies.map((movie) => (
              <MovieCard key={movie.title} movie={movie} />
            ))}
          </div>
        </React.Fragment>
      );
    }
    return <Loading />;
  }
}

export default MovieList;
