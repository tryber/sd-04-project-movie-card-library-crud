import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: '',
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id).then((movie) =>
      this.setState({
        movie,
        loading: false,
      }),
    );
  }

  render() {
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    if (loading || !movie) return <Loading />;

    return (
      <div className="movie-details-divzona">
        <div data-testid="movie-details" className="movie-detail-div">
          <img
            className="movie-detail-img"
            alt="Movie Cover"
            src={`../${imagePath}`}
          />
          <p className="movie-detail-title">{`${title}`}</p>
          <p className="movie-detail-subtitle">{`${subtitle}`}</p>
          <p className="movie-detail-storyline">{`${storyline}`}</p>
          <p className="movie-detail-genre">{`Genre: ${genre}`}</p>
          <p className="movie-detail-rating">{`Rating: ${rating}`}</p>
        </div>
        <div>
          <Link className="movie-details-back" to="/">VOLTAR</Link>
          <Link className="movie-details-edit" to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link
            className="movie-details-delete" to="/" onClick={() => movieAPI.deleteMovie(id)}
          >
            DELETAR
          </Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.any,
  }).isRequired,
};

export default MovieDetails;
