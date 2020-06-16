import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      loadead: false,
    };
    this.removeThisMovie = this.removeThisMovie.bind(this);
  }

  componentDidMount() {
    this.getThisMovie();
  }

  async getThisMovie() {
    const { id } = this.props.match.params;
    const movie = await movieAPI.getMovie(id);
    this.setState({ movie, loadead: true, id });
  }

  removeThisMovie() {
    const { id } = this.props.match.params;
    movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    if (!this.state.loadead) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle:  ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <div>
          <Link to={`/movies/${this.state.id}/edit`}>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
          <Link to="/" onClick={this.removeThisMovie}>
          DELETAR
          </Link>
        </div>
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
