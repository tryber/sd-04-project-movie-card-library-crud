import PropTypes from "prop-types";
import React from 'react';

class MovieCard extends React.Component {
  render() {
    // const { title, subtitle, storyline, rating, imagePath } = movie;
    const {
      title,
      subtitle,
      storyline,
      imagePath,
    } = this.props.movie;
    return (
      <div className="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        {/* <Rating rating={rating} /> */}
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
