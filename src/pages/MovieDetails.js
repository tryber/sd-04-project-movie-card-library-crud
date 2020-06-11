import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

const CardHeader = props => {
  const { title, subtitle, storyline } = props;
  return (
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <h6 className="card-title">{subtitle}</h6>
      <p className="card-text">{storyline}</p>
    </div>
  );
};

const CardList = props => {
  const { genre, rating } = props;
  return (
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <strong>Genre: </strong>
        {genre}
      </li>
      <li className="list-group-item">
        <strong>Rating: </strong>
        {rating}
      </li>
    </ul>
  );
};

const CardLinks = props => {
  const { id, deleteMovie } = props;
  return (
    <div className="card-body">
      <Link to={`/movies/${id}/edit`} className="card-link">
        EDITAR
      </Link>
      <Link to="/" onClick={() => deleteMovie(id)} className="card-link">
        DELETAR
      </Link>
      <Link to="/" className="card-link">
        VOLTAR
      </Link>
    </div>
  );
};

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
      shouldRedirect: false,
    };
    this.deleteMovie = this.deleteMovie.bind(this)
  }

  componentDidMount() {
    movieAPI
      .getMovie(this.props.match.params.id)
      .then(res => this.setState(state => ({ ...state, movie: res, loading: false })));
  }

  deleteMovie(id) {
    movieAPI
      .deleteMovie(id)
      .then(res =>
        res.status === 'OK'
          ? this.setState(state => ({ ...state, shouldRedirect: true }))
          : console.log('ERRO'),
      );
  }

  render() {
    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;
    const { id } = this.props.match.params;

    if (this.state.shouldRedirect) return <Redirect to="/" />;
    if (this.state.loading) return <Loading />;

    return (
      <div data-testid="movie-details">
        <div className="card">
          <img className="card-img-top" src={`../${imagePath}`} alt="Movie Cover" />
          <CardHeader title={title} subtitle={subtitle} storyline={storyline} />
          <CardList genre={genre} rating={rating} />
          <CardLinks id={id} deleteMovie={this.deleteMovie} />
        </div>
      </div>
    );
  }
}

export default MovieDetails;
