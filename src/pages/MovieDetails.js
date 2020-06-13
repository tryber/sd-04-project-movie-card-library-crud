import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    const { id } = this.props.match.params.id;
    this.state = {
      id,
      loading: true,
    };
  }

  async componentDidMount() {
    const moviesAPI = await movieAPI.getMovies(this.state.id);
    this.setState({ movies: moviesAPI, loading: false });
  }

  render() {

    const id = this.props.match.params.id;
    console.log(id);
    console.log(this.state.movies);

    if (!this.state.movies) return <Loading />;
    else {
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movies[id];
    console.log('Entrou');
    return (
        <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h1>{`${title}`}</h1>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <div className="flex-line">
          <Link to="/movies/?{id}/edit">EDITAR</Link>
          <Link to="/">VOLTAR</Link>
        </div>  
      </div>
    )
    }
  }
}


export default MovieDetails;
