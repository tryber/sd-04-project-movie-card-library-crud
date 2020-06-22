import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        title: '',
        storyline: '',
        genre: '',
        rating: 0,
        subtitle: '',
        imagePath: '',
        id: '',
      },
    };
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id)
      .then((movie) => this.setState({ movie }));
  }

  render() {
    // Change the condition to check the state
    const { movie } = this.state;

    if (!movie) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details" className="movie-card-body">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{title}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
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
