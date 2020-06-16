import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { MovieListStyle } from '../styles/styles';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';
import NotFound from './NotFound';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: null, loading: true };
  }

  async componentDidMount() {
    try {
      const data1 = await movieAPI.getMovies();
      await this.setState({ movies: data1, loading: false });
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    const { movies, loading, error } = this.state;
    // Render Loading here if the request is still happening
    if (loading) return <Loading />;
    if (error) return <NotFound />;
    return (
      <div data-testid="movie-list">
        <MovieListStyle>
          {movies.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </MovieListStyle>
      </div>
    );
  }
}

export default MovieList;
