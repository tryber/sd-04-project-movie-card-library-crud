import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components'; // ele vai saber que é o index

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      isLoaded: true,
      idEdit: '0', // para armazenar o id do movie que vem por url
      shouldRedirect: false,
    };
    this.getMovieAPI = this.getMovieAPI.bind(this);
    this.OnDeleteMovie = this.OnDeleteMovie.bind(this);
  }

  async componentDidMount() {
    this.getMovieAPI();
  }

  async getMovieAPI() {
    const { id } = this.props.match.params; // pegando o id da URL
    const movieResult = await movieAPI.getMovie(id);
    this.setState({ movie: movieResult, isLoaded: false, idEdit: id });
  }

  OnDeleteMovie() {
    const { idEdit } = this.state;
    movieAPI.deleteMovie(idEdit).then((response) => {
      if (response.status === 'OK') {
        this.setState({ shouldRedirect: true });
      }
    });
  }

  render() {
    const { movie, isLoaded, idEdit, shouldRedirect } = this.state;
    if (shouldRedirect) { // criar no state
      return <Redirect to="/" />;
    }

    // Change the condition to check the state
    if (isLoaded) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const linkEdit = `/movies/${idEdit}/edit`; // voltar aqui ajustar

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h1>{title}</h1>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={linkEdit} >EDITAR</Link>
        <Link to="/" >VOLTAR</Link>
        <button onClick={this.OnDeleteMovie}>DELETAR</button>
      </div>
    );
  }
}

export default MovieDetails;
