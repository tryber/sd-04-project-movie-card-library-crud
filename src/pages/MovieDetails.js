import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'NOK',
      movie: false,
    };
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id)
      .then((movie) => this.setState({
        movie,
      }));
  }

  deleteMovie(id) {
    movieAPI.deleteMovie(id)
      // .then((data) => this.setState({
      //   status: data.status,
      // }));
  }

  render() {
    // Change the condition to check the state
    // if (this.state.status === 'OK') return <Redirect to="/" />;
    if (!this.state.movie) return <Loading />;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      // <div>
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={() => this.deleteMovie(id)}>DELETAR</Link>
      </div>
      // </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
