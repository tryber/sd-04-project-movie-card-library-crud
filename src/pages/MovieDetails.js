import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: '', loading: true };
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id)
      .then((movie) => this.setState({ movie, loading: false }));
  }

  delete() {
    const { id } = this.state.movie;
    movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    const { movie, loading } = this.state;
    if (loading) return <Loading />;
    const { storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h1>{movie.title}</h1>
        <p>{subtitle}</p>
        <p>{storyline}</p>
        <p>{genre}</p>
        <p>{rating}</p>
        <button type="button"><Link to={`/movies/${movie.id}/edit`}>EDITAR</Link></button>
        <button type="button" onClick={() => this.delete()}><Link to="/">DELETAR</Link></button>
        <button type="button"><Link to="/">VOLTAR</Link></button>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.any,
  }).isRequired,
};

export default MovieDetails;
