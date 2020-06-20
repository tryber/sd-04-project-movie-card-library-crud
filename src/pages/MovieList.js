import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';
import NotFound from './NotFound';
import './Pages.css';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: null, loading: true };
  }

  componentDidMount() {
    movieAPI.getMovies().then((movies) => {
      this.setState({ movies, loading: false });
    });
  }

  render() {
    const { movies, loading, error } = this.state;
    // Render Loading here if the request is still happening
    if (loading) return <Loading />;
    if (error) return <NotFound />;
    return (
      <div data-testid="movie-list">
        <div className="movieListStyle">
          {movies.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
}

export default MovieList;
