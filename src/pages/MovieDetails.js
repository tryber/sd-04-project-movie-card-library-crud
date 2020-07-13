import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import PropTypes from 'prop-types'

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      movies: [],
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    movieAPI.getMovie(id)
      .then((result) => this.setState({ movie: result, isLoaded: true }));
  }

  render() {
    if (!this.state.isLoaded) return <Loading />;
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    const id = this.props.match.params.id

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={'/'}>VOLTAR</Link>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to={'/'} onClick={() => movieAPI.deleteMovie(id)}>DELETAR</Link>
      </div>

    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
