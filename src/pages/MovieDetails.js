import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Loading } from '../components';
import { getMovie, deleteMovie } from '../services/movieAPI';
import '../App.css';

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
      <div className="movie-card-details" data-testid="movie-details">
        <img className="movie-card-image" alt="Movie Cover" src={`../${imagePath}`} />
        <div className="movie-card-body">
          <p className="movie-card-title">{`Title: ${title}`}</p>
          <p className="movie-card-subtitle">{`Subtitle: ${subtitle}`}</p>
          <p className="movie-card-storyline">{`Storyline: ${storyline}`}</p>
          <p className="genre">{`Genre: ${genre}`}</p>
          <p className="rating">{`Rating: ${rating}`}</p>
          <Link className="buttons bt-action" to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link className="buttons bt-del" onClick={this.delMovie} to="/">DELETAR</Link>
          <Link className="buttons bt-back" to="/">VOLTAR</Link>
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
