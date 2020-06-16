import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, id } = movie;
    return (
      <div data-testid="movie-card">
        <div>
          <h3>{title}</h3>
          <img src={`../${imagePath}`} alt={title} />
          <p>{storyline}</p>
          <Link to={`/movies/${id}`}>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    title: PropTypes.string
  }).isRequired
};

export default MovieCard;
