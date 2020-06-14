import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';


class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      needLoad: true,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id).then((movie) => this.setState({ movie, needLoad: false }));
  }

  render() {
    const { needLoad, movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    return needLoad ? (
      <Loading />
    ) : (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link className="" to={`/movies/${id}/edit`}>
          EDITAR
        </Link>
        <Link className="link" to="/">
          VOLTAR
        </Link>
        <Link className="" to="/" onClick={() => movieAPI.deleteMovie(id)}>
          DELETAR
        </Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes
    .oneOfType([PropTypes.func, PropTypes.object]))
    .isRequired,
};
