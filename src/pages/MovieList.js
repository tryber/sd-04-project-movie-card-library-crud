import React, { Component } from 'react';
import { Loading, MovieCard } from '../components';

import * as movieAPI from '../services/movieAPI';
import { Link } from 'react-router-dom';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true,
    };
  }
  componentDidMount() {
    movieAPI
      .getMovies()
      .then(res => this.setState(state => ({ ...state, movies: res, loading: false })));
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) return <Loading />;

    return (
      <>
        <div className='row justify-content-center' data-testid='movie-list'>
          {movies.map(movie => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </div>
        <div className='row justify-content-center mb-5'>
          <Link to='/movies/new' className='btn btn-primary'>ADICIONAR CARTÃO</Link>
        </div>
      </>
    );
  }
}

export default MovieList;
