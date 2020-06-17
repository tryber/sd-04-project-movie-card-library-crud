import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor(props) {
    super(props)
    this.state = { movie: {}, loading: true };
  }

  componentDidMount() {
    movieAPI
      .getMovie(this.props.match.params.id)
      .then((data) => this.setState({ movie: data, loading: false }));
  }

  render() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { id } = this.props;
    // Change the condition to check the state
    return this.state.loading ? <Loading /> : (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`} className="btn">
          EDITAR
        </Link>
        <Link to="/" className="btn">
          VOLTAR
        </Link>
      </div>
    );
  }
}

export default MovieDetails;
