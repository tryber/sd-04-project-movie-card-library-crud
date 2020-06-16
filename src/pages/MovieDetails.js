import React, { Component } from 'react';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itsLoading: true,
      movie: {},
      error: null,
    };
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id)
      .then((data) => this.setState({
        itsLoading: false,
        movie: data,
      }),
      (error) => this.setState({
        itsLoading: false,
        error,
      }));
  }

  render() {
    // Change the condition to check the state
    const { itsLoading, movie, error } = this.state;
    if (error) return <div>Erro: {error.message}</div>;
    if (itsLoading) return <Loading />;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <button type="button">
          <Link to={`/movies/${this.props.match.params.id}/edit`}>EDITAR</Link>
        </button>
        <button type="button">
          <Link to="/">VOLTAR</Link>
        </button>
      </div>
    );
  }
}

export default MovieDetails;
