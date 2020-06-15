import React, { Component } from "react";

import { Link } from "react-router-dom";
import * as movieAPI from "../services/movieAPI";
import { Loading } from "../components";

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movie: null,
    };
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id).then((movieObj) => {
      this.setState({
        isLoading: false,
        movie: movieObj,
      });
    });
  }

  render() {
    const { isLoading, movie } = this.state;
    if (isLoading) return <Loading />;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h3>{title}</h3>
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
