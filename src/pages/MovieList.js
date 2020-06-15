import React, { Component } from "react";
import MovieCard from "../components/MovieCard";

import * as movieAPI from "../services/movieAPI";
import Loading from "../components/Loading";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((moviesArray) =>
      this.setState({
        movies: moviesArray,
        isLoading: false,
      })
    );
  }

  render() {
    const { movies, isLoading } = this.state;

    if (isLoading) return <Loading />;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    );
  }
}

export default MovieList;
