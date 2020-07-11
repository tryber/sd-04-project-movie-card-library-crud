import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Loading } from '../components';
import { getMovie as getMovieDetails, deleteMovie } from '../services/movieAPI';
import { ReplyIcon, PencilIcon, TrashIcon } from '@primer/octicons-react';

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
      <div data-testid="movie-details" className="container">
        <nav className="navbar navbar-light bg-light mt-4">
          <span className="navbar-brand font-weight-light">{title}</span>
          <Link className="nav-link d-flex align-items-center" to="/">
            <ReplyIcon className="mr-1" size={14} />
            VOLTAR
          </Link>
        </nav>
        <div className="card">
          <img
            className="card-img-top"
            alt="Movie Cover"
            src={`../${imagePath}`}
          />
          <div className="card-body px-4">
            <h5 className="card-subtitle text-muted my-3">{`Subtitle: ${subtitle}`}</h5>
            <p className="card-text">{`Storyline: ${storyline}`}</p>
            <p className="card-text">{`Genre: ${genre}`}</p>
            <h4><span className="card-text badge badge-pill badge-primary align-top">{rating}</span></h4>
            <hr />
            <div className="row ml-1 mt-3">
              <Link className="card-link d-flex align-items-center" to={`/movies/${id}/edit`}>
                <PencilIcon className="mr-1" size={14} />
                EDITAR
              </Link>
              <Link
                className="card-link d-flex align-items-center"
                to="/"
                onClick={() => deleteMovie(id)}
              >
                <TrashIcon className="mr-1" size={14} />
                DELETAR
              </Link>
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
