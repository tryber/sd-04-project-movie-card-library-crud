import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { id, title, storyline, imagePath } = this.props.movie;

    return (
      <div data-testid="movie-card" className="col-sm-6 mb-5">
        <div className="card shadow-sm">
          <img className="card-img-top" alt="Movie Cover" src={`../${imagePath}`} />
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{storyline}</p>
            <Link to={`/movies/${id}`} className="card-link">VER DETALHES</Link>
          </div>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape(PropTypes.object.isRequired).isRequired,
};

export default MovieCard;
