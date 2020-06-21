import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import PropTypes from 'prop-types';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {
        title: '',
        storyline: '',
        imagePath: '',
        genre: '',
        rating: '',
        subtitle: '',
        id: '',
      },
      isLoaded: false,
      shouldRiderict: false,
    };
  }
  componentDidMount() {
    const { match } = this.props;
    movieAPI.getMovie(match.params.id).then((movie) => {
      const isLoaded = true;
      this.setState({ movie, isLoaded });
    });
  }

  render() {
    const { movie, isLoaded, shouldRiderict } = this.state;
    if (shouldRiderict) return <Redirect to="/" />;
    if (isLoaded) {
      const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
      const { match } = this.props;
      return (
        <div data-testid="movie-details">
          <Link to="/">VOLTAR</Link>
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Title: ${title}`}</p>
          <p>{`Title: ${subtitle}`}</p>
          <p>{`Title: ${storyline}`}</p>
          <p>{`Title: ${genre}`}</p>
          <p>{`Title: ${rating}`}</p>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link
            to="/"
            onClick={() => {
              movieAPI.deleteMovie(id);
              this.setState({ shouldRiderict: true });
            }}
          >
            DELETAR
          </Link>
        </div>
      );
    }
    return <Loading />;
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
      id: PropTypes.number
    }).isRequired,
}

export default MovieDetails;
