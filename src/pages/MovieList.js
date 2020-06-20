import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Loading, MovieCard } from '../components';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      loading: true,
    };
    this.deleteLoading = this.deleteLoading.bind(this)
  }



  async componentDidMount() {
    await movieAPI.getMovies()
      .then((data) => {
        this.setState({ movies: data, });
      });
    await this.deleteLoading();

  }
  deleteLoading() {
    this.setState({ loading: false })
  }
  render() {
    const { loading, movies } = this.state;
    if (loading) {
      return (<Loading />);
    }
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}
export default MovieList;
