import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import './MovieDetails.css';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {
        title: '',
        storyline: '',
        genre: '',
        rating: 0,
        subtitle: '',
        imagePath: '',
        id: '',
      },
      load: false,
      redirect: false,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    movieAPI.getMovie(match.params.id).then((movie) => {
      this.setState({
        movie,
        load: true,
      });
    });
  }

  render() {
    const { movie, load, redirect } = this.state;
    if (!load) return <Loading />;
    if (redirect) return <Redirect to="/" />;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details" className="md-card">
        <img className="md-img" alt="Movie Cover" src={`../${imagePath}`} />
        <div className="md-body">
          <p className="md-title">{`Title: ${title}`}</p>
          <p className="md-subtitle">{`Subtitle: ${subtitle}`}</p>
          <p className="md-other">{`Storyline: ${storyline}`}</p>
          <p className="md-other">{`Genre: ${genre}`}</p>
          <p className="md-other">{`Rating: ${rating}`}</p>
          <div className="md-links">
            <Link to={`/movies/${id}/edit`}>EDITAR</Link>
            <Link to="/">VOLTAR</Link>
            <Link
              to="/"
              onClick={() => {
                movieAPI.deleteMovie(id);
                this.setState({ redirect: true });
              }}
            >
              DELETAR
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

export default MovieDetails;
