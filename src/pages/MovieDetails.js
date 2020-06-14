
import React, { Component } from 'react';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = { movie: {
      title: '',
      subtitle: '',
      imagePath: '',
      genre: '',
      id: '',
      rating: '',
      storyline: '',
      bookmarked: '',
    },
      loading: true,
    };
  }

  componentDidMount() {
    const searchId = this.props.match.params.id;
    movieAPI.getMovie(searchId).then((movie) => this.setState({ movie, loading: false }));
  }

  render() {
    // Change the condition to check the state
    const { movie, loading } = this.state;
    const { id, storyline, imagePath, genre, rating, subtitle } = movie;
    if (loading) return <Loading />;
    return (
      <div data-testid="movie-details">
        <Link to="/">Voltar</Link>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>Editar</Link>
        <Link to="/" onClick={() => movieAPI.deleteMovie(id)}>DELETAR</Link>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string,
    }),
  }),
};
