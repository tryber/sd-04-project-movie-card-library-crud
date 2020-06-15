import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import PropTypes from 'prop-types';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      loadead: false,
    };
  }

  componentDidMount() {
    this.getThoseMovies();
  }

  async getThoseMovies() {
    const { id } = this.props.match.params;
    const data = await movieAPI.getMovies(id);
    this.setState({ movie: data, loadead: true, id });
  }

  render() {
    const { movie, loadead } = this.state;
    // Change the condition to check the state
    if (!loadead) return <Loading />;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle:  ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <div>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
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
