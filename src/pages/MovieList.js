import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      movies: null,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    movieAPI.getMovies().then((movies) => this.setState({
      isLoading: true,
      movies,
    }));
  }

  render() {
    const { movies, isLoading } = this.state;

    if (!isLoading) return <Loading />;

    return (
      <div data-testid="movie-list">
        { movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <div>
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
      </div>
    );
  }
}

export default MovieList;
