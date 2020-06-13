import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import PropTypes from 'prop-types';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      movie: {},
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    movieAPI.getMovie(id)
      .then((result) => this.setState({ movie: result, isLoaded: true }));
  }

  render() {
    // Change the condition to check the state
    if (!this.state.isLoaded) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};

export default MovieDetails;
