import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PlusIcon } from '@primer/octicons-react';

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
        <nav className="navbar navbar-light bg-light mt-4">
          <span className="navbar-brand font-weight-light">Movie Library CRUD</span>
          <Link to="/movies/new" className="nav-link d-flex align-items-center">
            <PlusIcon
              className="mr-1"
              size={14}
              verticalAlign="middle"
            />
            ADICIONAR CARTÃO
          </Link>
        </nav>
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
