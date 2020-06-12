import React, { Component } from 'react';
import { getMovies } from '../services/movieAPI';

import Loading from './Loading';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      movies: [],
    };
  }

  componentDidMount = () => {
    getMovies().then((data) => {
      this.setState({
        isLoading: false,
        movies: data,
      });
    });
  };

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <h1>Movie Library</h1>
        {isLoading ? <Loading /> : null}
        <div data-testid="movie-list"></div>
      </div>
    );
  }
}

export default MovieList;
