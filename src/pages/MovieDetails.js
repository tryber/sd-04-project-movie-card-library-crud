import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import './Pages.css';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: null, loading: true, redirect: false };
  }

  componentDidMount() {
    const { match } = this.props;
    movieAPI.getMovie(match.params.id).then((movie) => {
      this.setState({ movie, loading: false });
    });
  }

  render() {
    const { movie, loading, redirect } = this.state;
    if (loading) return <Loading />;
    if (redirect) return <Redirect to="/" />;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;
    return (
      <div data-testid="movie-details">
        <div className="movieListStyle">
          <div className="movieCardStyle">
            <img alt="Movie Cover" src={`../${imagePath}`} />
            <h2>{title}</h2>
            <p>{`Subtitle: ${subtitle}`}</p>
            <p>{`Storyline: ${storyline}`}</p>
            <p>{`Genre: ${genre}`}</p>
            <p>{`Rating: ${rating}`}</p>
            <Link to={`/movies/${movie.id}/edit`}>EDITAR</Link>
            <Link
              to="/"
              onClick={() => {
                movieAPI.deleteMovie(id);
                this.setState({ redirect: true });
              }}
            >
              DELETAR
            </Link>
            <Link to="/">VOLTAR</Link>
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
