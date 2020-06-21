import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    movieAPI.getMovie(this.props.match.params.id)
    .then((movie) => {
      this.setState({
        isLoaded: true,
        movie,
      });
    });
  }
  render() {
    // Change the condition to check the state
    const { isLoaded, movie } = this.state;
    if (!isLoaded) { 
      return <Loading />;
    }
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to="/movies/:id/edit">EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
  movie: PropTypes.shape.isRequired,
};

export default MovieDetails;
