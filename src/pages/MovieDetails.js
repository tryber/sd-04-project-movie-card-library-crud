import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link, Redirect } from 'react-router-dom';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
      shouldRedirect: false,
    };
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

  componentDidMount() {
    movieAPI
      .getMovie(this.props.match.params.id)
      .then(res => this.setState(state => ({ ...state, movie: res, loading: false })));
  }
  render() {
    // Change the condition to check the state
    if (this.state.shouldRedirect) return <Redirect to='/' />;
    if (this.state.loading) return <Loading />;

    const { title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid='movie-details'>
        <div className='card'>
          <img className='card-img-top' src={`../${imagePath}`} alt='Movie Cover' />
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <h6 className='card-title'>{subtitle}</h6>
            <p className='card-text'>{storyline}</p>
          </div>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <strong>Genre: </strong>
              {genre}
            </li>
            <li className='list-group-item'>
              <strong>Rating: </strong>
              {rating}
            </li>
          </ul>
          <div className='card-body'>
            <Link to={`/movies/${this.props.match.params.id}/edit`} className='card-link'>
              EDITAR
            </Link>
            <Link
              to='/'
              onClick={() => this.deleteMovie(this.props.match.params.id)}
              className='card-link'
            >
              DELETAR
            </Link>
            <Link to='/' className='card-link'>
              VOLTAR
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
