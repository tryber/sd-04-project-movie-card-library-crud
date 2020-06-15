import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';
import PropTypes from 'prop-types';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      shouldRedirect: false,
      movie: null,
    };
    this.delMovie = this.delMovie.bind(this);
  }

  delMovie() {
    const { id } = this.state.movie;
    movieAPI.deleteMovie(id)
      .then(() => {
        this.setState({ shouldRedirect: true });
      });
  }

  componentDidMount() {
    movieAPI
      .getMovie(this.props.match.params.id)
      .then((movie) => this.setState({ movie }));
  }
  
  render() {
    const { movie, loading, shouldRedirect } = this.state;

    if (loading === true) {
      return <Loading />;
    }
    if (shouldRedirect) return <Redirect to="/" />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div className="movie-card-details" data-testid="movie-details">
        <img
          className="movie-card-image"
          alt="Movie Cover"
          src={`../${imagePath}`}
        />
        <div className="movie-card-body">
          <span className="card-title">{`Title: ${title}`}</span>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
          <Link className="buttons bt-del" onClick={this.delMovie} to="/">
            DELETAR
          </Link>
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
