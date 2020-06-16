import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props
    const { title, id, subtitle, storyline, imagePath } = movie
    return (
      <div data-testid="movie-card">
        <img alt='Movie Cover' src={imagePath} />
        <div>
          <h2>{ title }</h2>
          <h3>{ subtitle }</h3>
          <p>{ storyline }</p>
        </div>
        <Link to={`/movies/${id}`}>Veja Detalhes</Link>
      </div>
    );
  }
}

export default MovieCard;
