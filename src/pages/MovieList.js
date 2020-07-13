import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import { Link } from 'react-router-dom';
import { Loading } from '../components/Loading';

class MovieList extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      movies: null,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then( movies => this.setState({
      isLoading: true,
      movies,
    }));
  }

  render() {
    const { movies, isLoading } = this.state;

    return (
      <div data-testid="movie-list">
        { !isLoading && <Loading /> }
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <div>
          <Link to="/movie/new">ADICIONAR CARTÂO</Link>
        </div>
      </div>
    );
  }
}

export default MovieList;
