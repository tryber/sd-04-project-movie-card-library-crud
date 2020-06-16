import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import * as movieAPI from "../services/movieAPI";
import Loading from "../components/Loading";

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        title: "",
        subtitle: "",
        imagePath: "",
        genre: "",
        id: "",
        rating: 0,
        storyline: "",
        bookmarked: ""
      },
      isLoading: true,
      shouldRedirect: false
    };
  }

  componentDidMount() {
    const { match } = this.props;
    movieAPI.getMovie(match.params.id).then(movie => {
      return this.setState({
        isLoading: false,
        movie
      });
    });
  }

  render() {
    const { isLoading, movie, shouldRedirect } = this.state;

    if (shouldRedirect) return <Redirect to="/" />;

    if (!isLoading) {
      return (
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={`../${movie.imagePath}`} />
          <p>{`Title: ${movie.title}`}</p>
          <p>{`Subtitle: ${movie.subtitle}`}</p>
          <p>{`Storyline: ${movie.storyline}`}</p>
          <p>{`Genre: ${movie.genre}`}</p>
          <p>{`Rating: ${movie.rating}`}</p>
          <Link to={`/movies/${movie.id}/edit`}>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
          <Link
            to="/"
            onClick={() => {
              movieAPI.deleteMovie(movie.id);
              this.setState({ shouldRedirect: true });
            }}
          >
            DELETAR
          </Link>
        </div>
      );
    }
    return <Loading />;
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number
    })
  }).isRequired
};

export default MovieDetails;
