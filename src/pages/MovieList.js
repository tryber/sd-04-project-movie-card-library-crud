import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';
import '../style.css';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movies: '',
    };
  }

  componentDidMount() {
    this.teste();
  }

  async teste() {
    console.log(this.state);
    this.setState({ movies: await movieAPI.getMovies() });
    this.setState({ loading: false });
    console.log(this.state);
  }

  loadingShow(movies) {
    if (this.state.loading === true) return <Loading />;
    return (
      <div className="movie-list" data-testid="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    );
  }

  render() {
    const { movies } = this.state;
    return this.loadingShow(movies);
  }
}
export default MovieList;
