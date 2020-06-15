import PropTypes from 'prop-types';
import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    movieAPI.getMovie()
    .then(() => {
      this.setState({
        isLoaded: true,
      });
    });
  }
  render() {
    // Change the condition to check the state
    const { isLoaded, movie } = this.props;
    if (!isLoaded) return <Loading />;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
  movie: PropTypes.object.isRequired,
};

export default MovieDetails;
