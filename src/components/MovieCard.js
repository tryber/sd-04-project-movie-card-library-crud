import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, id } = movie;
    const linkDetail = `/movies/${id}`;
    return (
      <div data-testid="movie-card">
        <img src={imagePath} alt={title} title={title} />
        <h1>{title}</h1>
        <p>{storyline}</p>
        <Link to={linkDetail} >VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.object
};

export default MovieCard;
