import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      movie: [],
      redirect: true,
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    movieAPI.getMovie(id).then((movie) => {
      this.setState({ movie, success: true, redirect: false });
    });
  }

  render() {
    const { movie, success, redirect } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    if (!success) return <Loading />;
    if (redirect) return <Redirect to="/" />;

    return (
      <div data-testid="movie-details" className="movie-card-big">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <hr />
        <Link to={`/movies/${movie.id}/edit`}>EDITAR&nbsp;</Link>
        <Link
          to="/"
          onClick={() => {
            movieAPI.deleteMovie(id);
            this.setState({ redirect: true });
          }}
        >
          DELETAR&nbsp;
        </Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.number }) }),
};

MovieDetails.defaultProps = {
  match: { params: { id: 100 } },
};
export default MovieDetails;
