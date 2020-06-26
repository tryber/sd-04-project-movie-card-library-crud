import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      movie: "",
    };
  }

  componentDidMount() {
    movieAPI.getMovie().then((id) => {
      this.setState(id);
    });
  }
  render() {
    const { id } = this.props;
    const { movie } = this.state;
    // Change the condition to check the state
    if (id === "") return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${id}/edit`}>EDITAR</Link>
        <Link to={"/"}>VOLTAR</Link>
      </div>
    );
  }
}

export default MovieDetails;
