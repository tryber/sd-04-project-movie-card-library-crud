import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      status: '',
    }
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id)
    .then(movie => this.setState({ movie }))
  }

  delete() {
    const { id } = this.state.movie;
    movieAPI.deleteMovie(id)
    
  }

  render() {
    // Change the condition to check the state
    const { movie, status } = this.state;
    if (movie === '') return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h1>{title}</h1>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <div>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link to={'/'}>VOLTAR</Link>
        </div>
        <Link onClick={this.delete} to={'/'}>DELETAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
