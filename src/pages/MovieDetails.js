import React, { Component } from 'react';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {
        title: '',
        storyline: '',
        imagePath: '',
        genre: '',
        rating: 0,
        subtitle: '',
        id: '',
      },
      isLoading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id).then((movie) => {
      const isLoading = false;
      this.setState({ movie, isLoading });
    });
  }
  render() {
    const { movie, isLoading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    if (isLoading) return <Loading />;

    return (
      <div data-testid="movie-details">
        <p>{`${title}`}</p>
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/" onClick={() => { movieAPI.deleteMovie(id) }}>DELETAR</Link>;
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
