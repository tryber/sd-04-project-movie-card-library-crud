
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

// import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = { movies: [], isLoaded: false };
  }

  render() {
    const { movies, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <React.Fragment>
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
          <div data-testid="movie-list">
            {console.log(movies)}
          </div>
        </React.Fragment>
      );
    }
    return <Loading />;
  }
}

export default MovieList;
