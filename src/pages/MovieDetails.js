import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
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
      loading: true,
      redirect: false,
    };
  }
  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id)
      .then((movie) => {
        this.setState({ movie, loading: false });
      });
  }
  render() {
    const { movie, loading, redirect } = this.state;
    if (redirect) { return <Redirect to="/" />; }
    if (loading) { return <Loading />; }
    const { storyline, imagePath, genre, rating, title, subtitle, id } = movie;
    return (
      <div data-testid="movie-details">
        <h1>{title}</h1>
        <img alt="Movie Cover" src={`/${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <div>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
          <Link to="/" onClick={() => { movieAPI.deleteMovie(id); }}>
            DELETAR
            </Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

export default MovieDetails;
