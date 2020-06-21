import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((movies) =>
      this.setState({
        loading: false,
        movies,
      }),
    );
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) return (<div className="loadingDiv"><Loading /></div>);
    return (
      <div>
        <div className="add-movie-div">
          <Link className="add-movie-link" to="/movies/new">
            ADICIONAR CARTÃO
          </Link>
        </div>
        <div data-testid="movie-list" className="movies-div">
          {movies.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
}

export default MovieList;
