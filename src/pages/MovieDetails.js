import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: {}, loading: true, shouldRedirect: false };
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    movieAPI
      .getMovie(this.props.match.params.id)
      .then((data) => this.setState({ movie: data, loading: false }));
  }

  deleteMovie(id) {
    movieAPI.deleteMovie(id).then((data) => {
      if (data.status === 'OK') this.setState({ shouldRedirect: true });
    });
  }

  render() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { id } = this.props.match.params;
    // Change the condition to check the state
    if (this.state.loading) return <Loading />;
    if (this.state.shouldRedirect) return <Redirect to="/" />;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`} className="btn">
          EDITAR
        </Link>
        <Link to="/" className="btn">
          VOLTAR
        </Link>
        <Link to="/" onClick={() => this.deleteMovie(id)} className="btn">
          DELETAR
        </Link>
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
