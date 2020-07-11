import MovieCard from '../components/MovieCard';
import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  render() {
    const { movies } = this.state;
    constructor(props) {
      super(props);
      this.state = {
        isLoaded: false,
        movies: [],
      };
    }

    componentDidMount() {
      movieAPI.getMovies()
        .then(data => {
          this.setState({ isLoaded: true, movies: data });
        });
    }
  
    render() {
      const { isLoaded, movies } = this.state;

      if (!isLoaded) return <div>Carregando...</div>
      else {
        return (
          <div data-testid="movie-list">
            <div className="main">
              {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
            </div>
          </div>
        );
      }
    }
  }
}

export default MovieList;
