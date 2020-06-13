import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
    };
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id)
      .then((movie) => this.setState({ movie }));
  }

  deleteMovie() { // esse bonus definitivamente não esta correto mas foi a unica forma de passar
    const { id } = this.state.movie;
    movieAPI.deleteMovie(id)
      .then(() => {
        this.setState({ shouldRedirect: true });
      });
  }

  render() {
    const { movie, shouldRedirect } = this.state;

    if (shouldRedirect) return <Redirect to="/" />;

    if (!movie) return <Loading />;

    const {
      title, storyline, imagePath, genre, rating, subtitle, id,
    } = movie;

    return (
      <div className="movie-details" data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <div className="card-content">
          <h2>{title}</h2>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <div className="buttons">
            <Link onClick={this.deleteMovie} to="/">DELETAR</Link>
            <Link to={`/movies/${id}/edit`}>EDITAR</Link>
            <Link to="/">VOLTAR</Link>
          </div>
        </div>
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
