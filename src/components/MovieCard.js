import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { id, title, storyline, imagePath } = this.props.movie;
    return (
      <div className="w-35 m-5" data-testid="movie-card">
        <div className="card">
          <img className="card-img-top" src={imagePath} alt="movie cover" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{storyline}</p>
            <Link to={`/movies/${id}`} className="btn btn-primary">
              VER DETALHES
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  })
}

export default MovieCard;
