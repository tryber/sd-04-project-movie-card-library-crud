import React, { Component } from "react";

import * as movieAPI from "../services/movieAPI";
import { Loading } from "../components";
import { Link } from "react-router-dom";

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      isLoading: false,
    };
  }
  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id).then((movie) =>
      this.setState({
        isLoading: true,
        movie: movie,
      })
    );
  }
  render() {
    // Change the condition to check the state
    const { isLoading, movie } = this.state;

    if (!isLoading) return <Loading />;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h4>{title}</h4>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
