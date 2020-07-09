import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Loading } from '../components';
import { getMovie as getMovieDetails } from '../services/movieAPI';

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
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <div>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      </div>
    ) : (<Loading />);
  }
}

MovieDetails.propTypes = {
  match: PropTypes.object.isRequired,
};

export default MovieDetails;
