import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    // const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, id } = movie; // desestruturando as props
    return (
      <div className="movie-card">
        <img className="movie-card-img" src={imagePath} alt="movie Card" />
        <div className="movie-screen">
          <h4 className="movie-title">{title}</h4>
          <h5 className="movie-subtitle">{subtitle}</h5>
          <p className="movie-storyline">{storyline}</p>
        </div>
        <Link className="movie-id" to={`movie/${id}`} >Ver detalhes</Link>
      </div>
    );
  }
}

MovieCard.prototype = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
