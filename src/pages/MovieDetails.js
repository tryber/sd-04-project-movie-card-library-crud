import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    };
  }
  async componentDidMount() {
    await movieAPI.getMovie(this.props.match.params.id)
      .then((movie) => {
        this.setState({ movie, loading: false });
      });
  }
  render() {
    const { movie, loading } = this.state;
    const { storyline, imagePath, genre, rating, title, subtitle, id } = movie;
    if (loading) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-details ">
        <h1>{title}</h1>
        <img alt="Movie Cover" src={`/${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <div>
          <Link to={'/'}>Voltar</Link>
          <Link to={`/movies/${id}/edit`} >Editar</Link>
          <Link to={'/'} onClick={() => movieAPI.deleteMovie(id)} >Deletar</Link>
        </div>
      </div>
    );
  }
}

MovieDetails.PropTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }),
};

export default MovieDetails;
