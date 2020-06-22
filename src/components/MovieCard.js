import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, id } = this.props.movie;
    return (
      <div data-testid="movie-card">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h2>{title}</h2>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
