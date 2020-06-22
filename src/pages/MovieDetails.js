import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: '',
      loading: true,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    movieAPI.getMovie(id).then((movie) => this.setState({
      movie,
      loading: false,
    }));
  }

  render() {
    // Change the condition to check the state
    const { movie, loading } = this.state;
    const { id } = this.props.match.params;

    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (loading || !movie) return <Loading />;

    return (
      <div data-testid="movie-details" className="movie-list">
        <div className="movie-details">
          <img alt="Movie Cover" src={`../${imagePath}`} className="movie-card-image-detail" />
          <p className="movie-card-title">{`Title: ${title}`}</p>
          <p className="movie-card-subtitle">{`Subtitle: ${subtitle}`}</p>
          <p className="movie-card-storyline">{`Storyline: ${storyline}`}</p>
          <p className="movie-card-storyline">{`Genre: ${genre}`}</p>
          <p className="rating">{`Rating: ${rating}`}</p>
          <div>
            <Link to="/">VOLTAR</Link>
            <br />
            <Link to={`${id}/edit`}>EDITAR</Link>
          </div>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

MovieDetails.defaultProps = {
  match: {},
};

export default MovieDetails;
