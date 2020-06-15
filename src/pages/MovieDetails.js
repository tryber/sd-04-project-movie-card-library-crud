import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      loading: true,
    };
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const loading = false;
    movieAPI.getMovie(id)
      .then((movie) => this.setState({ movie, loading }));
  }

  delete() {
    const { id } = this.state.movie;
    movieAPI.deleteMovie(id);
  }

  render() {
    // Change the condition to check the state
    const { movie, loading } = this.state;
    if (loading) return <Loading />;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    return (
      <div>
        <div data-testid="movie-details">
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
        </div>
        <div>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link to="/" >VOLTAR</Link>
          <Link onClick={this.delete} to="/">DELETAR</Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: propTypes.shape({
    params: propTypes.any,
  }).isRequired,
};

export default MovieDetails;
