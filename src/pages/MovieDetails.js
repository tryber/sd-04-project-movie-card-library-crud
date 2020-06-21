import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: '',
      loading: true,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    movieAPI.getMovies(match.params.id).then((movie) => this.setState({ movie, loading: false }));
  }

  render() {
    const { movie, loading } = this.state;
    if (loading || !movie) return <Loading />;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

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

MovieDetails.PropTypes = {
  match: PropTypes.shape({
    params: PropTypes.any,
  }).isRequired,
};

export default MovieDetails;
