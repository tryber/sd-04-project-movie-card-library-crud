import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movies: '',
    };
  }

  loadingShow = (movies) => {
    if (this.state.loading === true) return <Loading />;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    );
  };

  teste = async () => {
    console.log(this.state);
    this.setState({ movies: await movieAPI.getMovies() });
    this.setState({ loading: false });
    console.log(this.state);
  };

  componentDidMount() {
    this.teste();
  }

  render() {
    const { movies } = this.state;
    return this.loadingShow(movies);
  }
}
export default MovieList;
