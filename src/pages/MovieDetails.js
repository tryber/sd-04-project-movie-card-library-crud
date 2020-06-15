import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import MovieList from './MovieList';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      movie: [],
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const movie = await movieAPI.getMovie(id);
    this.setState({ loaded: true, movie, id });
  }

  render() {
    // Change the condition to check the state
    if (!this.state.loaded) return <Loading />;

    const { storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${this.state.id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
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
