import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    if (this.props.location.state) {
      movieAPI.getMovies().then((resp) => {
        const index = resp.findIndex((e) => e.id === this.props.location.state.id);
        const newArrMovies = [...resp];
        newArrMovies[index] = this.props.location.state;
        this.setState({ movies: newArrMovies });
      });
    }
    movieAPI.getMovies().then((resp) => {
      this.setState({ movies: resp });
    });
  }

  render() {
    const { movies } = this.state;
    if (movies.length === 0) {
      return (
        <div>
          <Loading />
        </div>
      );
    }
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;

MovieList.defaultProps = {
  location: {
    state: {
      id: '',
    },
  },
};

MovieList.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};
