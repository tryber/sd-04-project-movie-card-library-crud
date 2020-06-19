import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
    const { movie, load } = this.state;
    if (!load) return <Loading />;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div data-testid="movie-details" className="md-card">
        <img className="md-img" alt="Movie Cover" src={`../${imagePath}`} />
        <div className="md-body">
          <p className="md-title">{`Title: ${title}`}</p>
          <p className="md-subtitle">{`Subtitle: ${subtitle}`}</p>
          <p className="md-storyline">{`Storyline: ${storyline}`}</p>
          <p className="md-genre">{`Genre: ${genre}`}</p>
          <p className="md-rating">{`Rating: ${rating}`}</p>
          <div className="md-links">
            <Link to={`/movies/${id}/edit`}>EDITAR</Link>
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
