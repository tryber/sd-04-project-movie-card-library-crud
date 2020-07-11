import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { MovieCard, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((movies) => this.setState({ movies, loading: false }));
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) return (<Loading />);

    return (
      <div className="container">
        <ul className="nav mt-4">
          <li className="nav-item">
            <Link to="/movies/new" className="nav-link active">ADICIONAR CARTÃO</Link>
          </li>
        </ul>
        <div data-testid="movie-list" className="d-flex p-5">
          <div className="card-deck">
            {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieList;
