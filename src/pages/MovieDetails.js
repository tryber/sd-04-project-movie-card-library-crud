import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Loading } from '../components';
import { getMovie as getMovieDetails, deleteMovie } from '../services/movieAPI';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    getMovieDetails(id)
      .then((movie) => this.setState({ movie }));
  }

  render() {
    const movie = this.state.movie;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return id ? (
      <div data-testid="movie-details" className="container py-4">
        <div className="card">
          <img className="card-img-top" alt="Movie Cover" src={`../${imagePath}`} />
          <div className="card-body px-4">
            <h3 className="card-img-overlay text-white font-weight-light">{title}</h3>
            <h5 className="card-subtitle text-muted my-3">{`Subtitle: ${subtitle}`}</h5>
            <p className="card-text">{`Storyline: ${storyline}`}</p>
            <p className="card-text">{`Genre: ${genre}`}</p>
            <h4>
              <span className="card-text badge badge-pill badge-primary">
                {rating}
              </span>
            </h4>
            <hr />
            <div className="row ml-1 mt-3">
              <Link className="card-link position-relative" to="/">VOLTAR</Link>
              <Link className="card-link position-relative" to={`/movies/${id}/edit`}>EDITAR</Link>
              <Link className="card-link position-relative" to="/" onClick={() => deleteMovie(id)}>DELETAR</Link>
            </div>
          </div>
        </div>
      </div>
    ) : (<Loading />);
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape(PropTypes.object.isRequired).isRequired,
};

export default MovieDetails;
