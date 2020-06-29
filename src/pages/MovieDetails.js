import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: null, loading: true };
  }

  componentDidMount() {
    const { match } = this.props;
    movieAPI.getMovie(match.params.id).then((movie) => {
      this.setState({ movie: [movie], loading: false });
    });
  }

  render() {
    const { movie, loading } = this.state;
    if (loading) return <Loading />;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie[0];
    console.log(movie)
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <Link to={`/movies/${movie[0].id}/edit`}>Editar filme</Link>
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
