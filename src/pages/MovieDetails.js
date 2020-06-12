import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      movie: null,
    };
  }

  componentDidMount() {
    movieAPI
      .getMovie(this.props.match.params.id)
      .then((movie) => this.setState({ movie, isLoading: true }));
  }

  render() {
    // Change the condition to check the state
    const { isLoading, movie } = this.state;
    // const { id } = this.props.match.params;

    if (!isLoading) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h4>{title}</h4>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>

        <Link to={`/movies/${this.props.match.params.id}/edit`}>EDITAR</Link>

        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.prototypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
