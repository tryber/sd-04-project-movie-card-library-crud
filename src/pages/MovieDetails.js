import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    movieAPI.getMovie(id)
      .then((movie) => this.setState({ movie }));
  }

  render() {
    const movie = this.state.movie;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return id ? (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <div>
          <Link to={`${id}/edit`}>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>
      </div>
    ) : (<Loading />);
  }
}

export default MovieDetails;
