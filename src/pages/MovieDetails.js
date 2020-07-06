import React, { Component } from 'react';

import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: [], load: true };
  }

  componentDidMount() {
    movieAPI
    .getMovie(this.props.match.params.id)
    .then((mov) => this.setState({ movie: mov, load: false }));
  }

  render() {
    // Change the condition to check the state
    if (this.state.load) {
      return (
        <Loading />
      );
    }

    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    const { id } = this.props.match.params;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/" >
          VOLTAR
        </Link>
        <Link to={`/movies/${id}/edit`} >
          EDITAR
        </Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;
