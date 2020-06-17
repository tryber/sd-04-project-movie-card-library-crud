import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Link } from 'react-router-dom';

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

  // Render Loading here if the request is still happening
  componentDidMount() {
    movieAPI.getMovies().then((movies) => {
      const isLoaded = true;
      this.setState({ movies, isLoaded });
    });
  }

  render() {
    const { movies, isLoaded } = this.state;
    console.log(this.state);
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
