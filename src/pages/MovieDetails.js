import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      movie: [],
    };
    this.removeMovie = this.removeMovie.bind(this);
  }

  componentDidMount() {
    this.getMoviesInfo();
  }

  async getMoviesInfo() {
    const { id } = this.props.match.params;
    const movie = await movieAPI.getMovie(id);
    this.setState({ loaded: true, movie, id });
  }

  removeMovie() {
    const { id } = this.props.match.params;
    movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    if (!this.state.loaded) return <Loading />;

    const {
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
      title,
    } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${this.state.id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={this.removeMovie}>
          DELETAR
        </Link>
      </div>
    );
  }
}

MovieDetails.defaultProps = {
  match: null,
};

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }),
};

export default MovieDetails;
