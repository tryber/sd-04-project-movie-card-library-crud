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
      load: false,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((movies) => {
      this.setState({
        movies,
        load: true,
      });
    });
  }

  render() {
    const { movies, load } = this.state;

    if (load) {
      return (
        <div>
          
          <div data-testid="movie-list" className="app">
            {movies.map((movie) => (
              <MovieCard key={movie.title} movie={movie} />
            ))}
            <Link to="/movies/new">ADICIONAR CARTÃO</Link>
          </div>
        </div>
      );
    }
    return <Loading />;
  }
}

export default MovieList;
