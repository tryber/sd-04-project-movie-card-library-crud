import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import PropTypes from 'prop-types';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = { movie: [], isLoaded: false };
  }

  componentDidMount() {
    const { match } = this.props;
    movieAPI.getMovie(match.params.id).then((movie) => {
      const isLoaded = true;
      this.setState({ movie, isLoaded });
    });
  }

  render() {
    // Change the condition to check the state
    const { movie, isLoaded } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (!isLoaded) return <Loading />;
    return (
      <div data-testid="movie-details">
        <Link to="/">VOLTAR</Link>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/movies/:id/edit">EDITAR</Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};
