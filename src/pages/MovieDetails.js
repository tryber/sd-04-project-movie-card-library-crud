import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Loading } from '../components';
import { getMovie, deleteMovie } from '../services/movieAPI';
// import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      movie: null,
    };
    this.delMovie = this.delMovie.bind(this);
  }

  componentDidMount() {
    getMovie(this.props.match.params.id)
      .then((movie) => this.setState({ movie }));
  }

  delMovie() {
    const { id } = this.state.movie;
    deleteMovie(id)
      .then(() => {
        this.setState({ shouldRedirect: true });
      });
  }

  render() {
    const { movie, shouldRedirect } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;
    if (!movie) return <Loading />;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link onClick={this.delMovie} to="/">DELETAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}


MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
