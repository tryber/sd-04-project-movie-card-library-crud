import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id,
      title,
      storyline,
      imagePath,
    }
  }
  render() {
    const { id, title, storyline, imagePath } = this.state; 
    return (
      <div data-testid="movie-card" className="movie-card">
        <image alt={title} className="movie-card-image" src={imagePath} />
        <div>
          <h4 className="movie-card-title" >{title}</h4>
          <p className="movie-card-storyline"> {storyline} </p>
          <Link className="movie-card-details" to={`movies/${id}`}>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
